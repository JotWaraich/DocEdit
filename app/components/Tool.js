import CheckList from "@editorjs/checklist";
import Header from "@editorjs/header";
import RawTool from '@editorjs/raw';
import EditorjsList from '@editorjs/list';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';
import CodeTool from '@editorjs/code';

export const EDITOR_JS_TOOLS = {
    header: Header,
    checkList: CheckList,
    raw: RawTool,
    quote: Quote,
    table: Table,
    warning: Warning,
    code: CodeTool,
    embed: {
        class: Embed,
        inlineToolbar: true
    },
    list: {
        class: EditorjsList,
        inlineToolbar: true,
        config: {
            defaultStyle: 'unordered',
            maxLevel: 3,
        },
    },
}