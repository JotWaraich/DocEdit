import { db } from "./firebase";
import {
    collection,
    getDocs,
    addDoc,
    query,
    doc,
    deleteDoc,
    where,
    setDoc,
} from "firebase/firestore";

// Fetch blocks data for a specific user
export async function getBlocks(userId) {
    const blocks = [];
    const q = query(collection(db, `users/${userId}/blocks`)); // Collection for blocks
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
        blocks.push(document.data());
    });

    return blocks;
}

// Save blocks data for a specific user
export async function addBlock(userId, blocksData) {
    // Ensure all blocks have an id (if they don't, create one)
    const blocksWithIds = blocksData.blocks.map((block) => ({
        ...block,
        id: block.id || `block_${Math.random().toString(36).substr(2, 9)}`,  // If no id, generate a unique one
    }));

    // Save the blocks for the user
    try {
        await setDoc(doc(db, `users/${userId}/blocks`, "userBlocks"), {
            time: blocksData.time,
            blocks: blocksWithIds,
            version: blocksData.version,
        });

        console.log("Blocks data added successfully");
    } catch (error) {
        console.error("Error saving blocks data:", error);
    }
}

// Delete a block for a specific user by block ID
export async function deleteBlock(userId, blockId) {
    const blocksRef = collection(db, `users/${userId}/blocks`);
    const q = query(blocksRef, where("blocks.id", "==", blockId));

    try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            // Assuming only one document will match, proceed to delete it
            querySnapshot.forEach(async (document) => {
                // Delete the block document
                await deleteDoc(document.ref);
                console.log(`Block with ID ${blockId} deleted successfully`);
            });
        } else {
            console.log("No block document matches the specified ID.");
        }
    } catch (error) {
        console.error("Error deleting block by id:", error);
    }
}
