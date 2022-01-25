/**
 * @license Copyright (c) 2014-2022, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import '../sample/custom.css';
class Editor extends InlineEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
    Autoformat,
    Bold,
    CKFinderUploadAdapter,
    CodeBlock,
    Essentials,
    FontColor,
    Heading,
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    SourceEditing,
    Table,
    TableToolbar,
    Underline,
];

// Editor configuration.
Editor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            '|',
            'fontColor',
            'bold',
            'underline',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'imageUpload',
            'codeBlock',
            'insertTable',
            'sourceEditing',
            'undo',
            'redo',
        ],
    },
    language: 'fa',
    image: {
        toolbar: [
            'imageTextAlternative',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
        ],
    },
    codeBlock: {
        languages: [
            { language: 'plaintext', label: 'Plain text' }, // The default language.
            { language: 'c', label: 'C' },
            { language: 'cs', label: 'C#' },
            { language: 'cpp', label: 'cpp' },
            { language: 'css', label: 'CSS' },
            { language: 'diff', label: 'Diff' },
            { language: 'html', label: 'HTML' },
            { language: 'java', label: 'Java' },
            { language: 'javascript', label: 'JavaScript' },
            { language: 'php', label: 'PHP' },
            { language: 'python', label: 'Python' },
            { language: 'ruby', label: 'Ruby' },
            { language: 'typescript', label: 'TypeScript' },
            { language: 'xml', label: 'XML' },
        ],
    },
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
};

export default Editor;
