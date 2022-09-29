(function () {
    this.editHTML = function () {
        let defaults = {
            containerID: null,
        };

        if (arguments[0] && typeof arguments[0] === 'object') {
            this.options = extendDefaults(defaults, arguments[0]);
        }

        this.init();
    }

    function extendDefaults(source, properties) {
        let property;

        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }

        return source;
    }

    editHTML.prototype.init = function () {
        let container = document.getElementById(this.options.containerID);

        let editorBlock = `<div class="html-editor">
                <div class="toolbar">
                    <div class="toolbar-row">
                        <div class="toolbar-box">
                            <div class="toolbar-items">
                                <span class="editor-btn icon-code" data-action="toggle-view" title="Show HTML-Code"></span>
                            </div>
                        </div>

                        <div class="toolbar-box">
                            <div class="toolbar-items">
                                <span class="editor-btn icon-undo" data-action="undo" title="Undo"></span>
                                <span class="editor-btn icon-bold" data-action="bold" data-tag-name="b" title="Bold"></span>
                                <span class="editor-btn icon-italic" data-action="italic" data-tag-name="i" title="Italic"></span>
                                <span class="editor-btn icon-underline" data-action="underline" data-tag-name="u" title="Underline"></span>
                                <span class="editor-btn icon-reset-format" data-action="removeFormat" title="Remove format"></span>
                            </div>
                        </div>

                        <div class="toolbar-box">
                            <div class="toolbar-items">
                                <!-- Heading -->
                                <span class="editor-btn icon has-submenu">
                                    Format

                                    <div class="submenu toolbar-items format">
                                        <span class="editor-btn" data-action="formatBlock" data-tag-name="h1" title="Heading 1">
                                            <h1>Heading 1</h1>
                                        </span>
                                        <span class="editor-btn" data-action="formatBlock" data-tag-name="h2" title="Heading 2">
                                            <h2>Heading 2</h2>
                                        </span>
                                        <span class="editor-btn" data-action="formatBlock" data-tag-name="h3" title="Heading 3">
                                            <h3>Heading 3</h3>
                                        </span>
                                        <span class="editor-btn" data-action="formatBlock" data-tag-name="p" title="Normal">
                                            <p>Normal</p>
                                        </span>
                                    </div>
                                </span>

                                <span class="editor-btn icon icon-palette-a-without-line has-submenu" data-tag-name="span">
                                    <span class="palette__line"></span>

                                    <div class="submenu toolbar-items palette">
                                        <div class="palette__grid">
                                            <div class="palette__item color-1"></div>
                                            <div class="palette__item color-2"></div>
                                            <div class="palette__item color-3"></div>
                                            <div class="palette__item color-4"></div>
                                            <div class="palette__item color-5"></div>
                                            <div class="palette__item color-6"></div>
                                            <div class="palette__item color-7"></div>
                                            <div class="palette__item color-8"></div>
                                            <div class="palette__item color-9"></div>
                                            <div class="palette__item color-10"></div>
                                            <div class="palette__item color-11"></div>
                                            <div class="palette__item color-12"></div>
                                            <div class="palette__item color-13"></div>
                                            <div class="palette__item color-14"></div>
                                            <div class="palette__item color-15"></div>
                                            <div class="palette__item color-16"></div>
                                            <div class="palette__item color-17"></div>
                                            <div class="palette__item color-18"></div>
                                            <div class="palette__item color-19"></div>
                                            <div class="palette__item color-20"></div>
                                            <div class="palette__item color-21"></div>
                                            <div class="palette__item color-reset"></div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div class="toolbar-box">
                            <!-- Centering -->
                            <div class="toolbar-items">
                                <span class="editor-btn icon icon-align-left has-submenu">
                                    <div class="submenu toolbar-items">
                                        <span class="editor-btn icon-align-left" data-action="justifyLeft" data-style="textAlign:left" title="Justify left"></span>
                                        <span class="editor-btn icon-align-center" data-action="justifyCenter" data-style="textAlign:center" title="Justify center"></span>
                                        <span class="editor-btn icon-align-right" data-action="justifyRight" data-style="textAlign:right" title="Justify right"></span>
                                        <span class="editor-btn icon-align-justify" data-action="justifyFull" data-style="textAlign:justify" title="Justify block"></span>
                                    </div>
                                </span>

                                <div class="subbuttons">
                                    <span class="editor-btn icon-unordered-list has-submenu" data-action="insertUnorderedList" data-tag-name="ul" title="Insert unordered list"></span>

                                    <div class="submenu toolbar-items">
                                        <span class="editor-btn icon-ordered-list" data-action="insertOrderedList" data-tag-name="ol" title="Insert ordered list"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="toolbar-box">
                            <div class="toolbar-items">
                                <span class="editor-btn icon-link" data-action="createLink" title="Insert Link"></span>
                                <span class="editor-btn icon-unlink" data-action="unlink" data-tag-name="a" title="Unlink"></span>
                            </div>
                        </div>

                        <div class="toolbar-box">
                            <div class="toolbar-items">
                                <span class="editor-btn icon icon-table has-submenu">
                                    <div class="submenu toolbar-items table-box">
                                        <div class="table">
                                            <table>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </table>
                                        </div>

                                        <div class="table__size">
                                            <span class="table__width">0</span>
                                            <span>x</span>
                                            <span class="table__height">0</span>
                                        </div>
                                    </div>
                                </span>
                                <span class="editor-btn icon-line" data-action="insertHorizontalRule" title="Insert horizontal rule"></span>
                            </div>
                        </div>

                        <div class="toolbar-box">
                            <div class="toolbar-items">
                                <span class="editor-btn icon-quotes" data-action="formatBlock" data-tag-name="blockquote" title="Quote"></span>
                            </div>
                        </div>

                        <div class="toolbar-box">
                            <div class="toolbar-items">
                                <span class="editor-btn icon-symbol" data-action="symbols" title="Symbol"></span>
                                <span class="editor-btn icon-arrows" data-action="full-screen" title="Full Screen"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="editor-content-box">
                    <div class="editor-view" contenteditable>
                        <h1>Text lorem ipsum</h1>
                        <h2>Text lorem ipsum</h2>
                        <h3>Text lorem ipsum</h3>
                        
                        <img src="./images/adobe-6.jpg" alt="">
                        
                        <p><b>Text lorem ipsum</b> dolor sit amet, <i>consectetur</i> adipiscing elit, <u>sed do eiusmod tempor incididunt</u> ut labore et dolore magna aliqua.</p>
                        
                        <ol>
                            <li>Text lorem ipsum</li>
                            <li>Text lorem ipsum</li>
                        </ol>
                        
                        <ul>
                            <li>Text lorem ipsum</li>
                            <li>Text lorem ipsum</li>
                        </ul>
                    </div>
                    <textarea class="html-view"></textarea>
                </div>

                <div class="toolbar-bottom">
                    <div class="toolbar-tags"></div>
                    <div class="toolbar-chars"></div>
                </div>
            </div> 
            
            <!-- Modal --> 
            <div class="modal">
                <div class="modal-bg"></div>
            
                <!--     insert link popup     -->
                <div class="modal-wrapper link">
                    <div class="modal-close"></div>
                    <div class="modal-content" id="modalCreateLink">
                        <h2>Insert Link</h2>
                        <input class="modal-input input" type="text" id="linkValue" placeholder="Link (example: https://onidone.com/)">
            
                        <div class="checkbox">
                            <input class="custom-checkbox" type="checkbox" id="new-tab" name="new-tab" value="new-tab">
                            <label for="new-tab">Open in new Tab?</label>
                        </div>
                        <button class="done">Done</button>
                    </div>
                </div>
            
                <!--     insert symbol popup     -->
                <div class="modal-wrapper symbols">
                    <div class="modal-close"></div>
                    <div class="modal-content" id="modalInsertSymbol">
                        <h2>Special Character</h2>
            
                        <div class="modal-inner">
                            <div class="modal-tab-names">
                                <div class="tab active">All</div>
                                <div class="tab">Currency</div>
                                <div class="tab">Text</div>
                                <div class="tab">Quotation</div>
                                <div class="tab">Mathematical</div>
                                <div class="tab">Extended Latin</div>
                                <div class="tab">Symbols</div>
                                <div class="tab">Arrows</div>
                            </div>
            
                            <div class="modal-tab-content">
                                <div class="modal-search">
                                    <span class="icon-search"></span>
                                    <input class="input" type="text" placeholder="Search...">
                                </div>
            
                                <div class="tab-content active">
                                    <div class="tab-content__symbols">
                                        <span title="question">?</span>
                                        <span title="star">*</span>
                                        <span title="umpersant">&</span>
                                        <span title="dollar">$</span>
                                        <span title="percent">%</span>
                                        <span title="question">?</span>
                                        <span title="question">?</span>
                                        <span title="star">*</span>
                                        <span title="umpersant">&</span>
                                        <span title="dollar">$</span>
                                        <span title="percent">%</span>
                                        <span title="ques">?</span>
                                    </div>
                                </div>
            
                                <div class="tab-content">
                                    <div class="tab-content__symbols">
                                        <span title="question">?</span>
                                        <span title="star">*</span>
                                    </div>
                                </div>
            
                                <div class="tab-content">
                                    <div class="tab-content__symbols">
                                        <span title="umpersant">&</span>
                                        <span title="dollar">$</span>
                                    </div>
                                </div>
            
                                <div class="tab-content">
                                    <div class="tab-content__symbols">
                                        <span title="percent">%</span>
                                        <span title="question">?</span>
                                    </div>
                                </div>
            
                                <div class="tab-content">
                                    <div class="tab-content__symbols">
                                        <span title="umpersant">&</span>
                                        <span title="dollar">$</span>
                                        <span title="percent">%</span>
                                        <span title="ques">?</span>
                                    </div>
                                </div>
            
                                <div class="tab-content">
                                    <div class="tab-content__symbols">
                                        <span title="umpersant">&</span>
                                        <span title="dollar">$</span>
                                        <span title="percent">%</span>
                                        <span title="question">?</span>
                                    </div>
                                </div>
            
                                <div class="tab-content">
                                    <div class="tab-content__symbols">
                                        <span title="dollar">$</span>
                                        <span title="umpersant">&</span>
                                    </div>
                                </div>
            
                                <div class="tab-content">
                                    <div class="tab-content__symbols">
                                        <span title="dollar">$</span>
                                        <span title="percent">%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,

            editorNode = document.createRange().createContextualFragment(editorBlock);

        if (container.tagName.toLowerCase() == 'textarea') {
            container.style.display = 'none';
            container.style.visibility = 'hidden';
            container.parentElement.appendChild(editorNode);

            let editorValue = document.getElementsByClassName('editor-view')[0].innerHTML;
            container.value = editorValue;
        } else {
            container.appendChild(editorNode);
        }

        const editor        = document.getElementsByClassName('html-editor')[0];
        const toolbar       = editor.getElementsByClassName('toolbar')[0];
        const toolbarBott   = editor.getElementsByClassName('toolbar-bottom')[0];
        const buttons       = toolbar.querySelectorAll('.editor-btn:not(.icon.has-submenu)');
        const contentArea   = editor.getElementsByClassName('editor-content-box')[0];
        const visualView    = contentArea.getElementsByClassName('editor-view')[0]; // content of visual editor
        const htmlView      = contentArea.getElementsByClassName('html-view')[0]; // content of textarea
        const modal         = document.getElementsByClassName('modal')[0];
        const paletteBtn    = toolbar.getElementsByClassName('icon-palette-a-without-line')[0];

        const allBtns = document.querySelectorAll('.editor-btn');

        let sel = false;

        let elementsPathContainer = editor.getElementsByClassName('toolbar-tags')[0];
        let charsContainer = editor.getElementsByClassName('toolbar-chars')[0];

        let searchInput = modal.querySelector('.modal-tab-content .modal-search .input');
        let currentActiveSymbols;

        let resetColor = toolbar.querySelector('.color-reset'),
            paletteItems = toolbar.querySelectorAll('.palette__item:not(.color-reset, .color-select)'),
            coloredLine = toolbar.querySelector('.palette__line');

        // add active tag event
        document.addEventListener('selectionchange', selectionChange);

        // add paste event
        visualView.addEventListener('paste', pasteEvent);

        // add paragraph tag on new line
        contentArea.addEventListener('keypress', addParagraphTag);

        // remove default event
        allBtns.forEach(btn => {
            btn.addEventListener('mousedown', function (e) {
                e.preventDefault();
            })
            btn.addEventListener('touch', function (e) {
                e.preventDefault();
            })
        })

        // add toolbar button actions
        for (let i = 0; i < buttons.length; i++) {
            let button = buttons[i];

            button.addEventListener('click', function (e) {
                let action = this.dataset.action;
                let tag = this.dataset?.tagName;

                switch (action) {
                    case 'toggle-view':
                        execCodeAction(this, editor);
                        break;
                    case 'createLink':
                        execPopupAction(action);
                        break;
                    case 'symbols':
                        execPopupAction(action);
                        break;
                    case 'full-screen':
                        fullScreen();
                        break;
                    default:
                        execDefaultAction(action, tag);
                }
            });

            if (button.classList.contains('icon-unlink')) {
                button.classList.add('disabled');
            }
        }

        // count chars on start
        countContentChars();

        // change tab on start
        changeTab();


        /** This function executes all 'normal' actions **/
        function execDefaultAction(action, tag) {
            tag = tag || false;

            // console.log('Parent:');
            // console.log(parentNode());

            if (action === 'italic' ) {
                const isTag = parentElRec('i', window.getSelection().anchorNode.parentNode);
                if (isTag) {
                    let pos = getCaretCharacterOffsetWithin(isTag);
                    // console.log('pos = ' + pos);
                }

            }

            if (tag === 'blockquote' ) { // && parentNode() === 'blockquote'
                const isTag = parentElRec('blockquote', window.getSelection().anchorNode.parentNode);
                if (isTag)
                    tag = 'p';
            }

            if (tag) {
                document.execCommand(action, false, tag);
            } else {
                document.execCommand(action, false);
            }
        }

        //
        function getCaretCharacterOffsetWithin(element) {
            var caretOffset = 0;
            var doc = element.ownerDocument || element.document;
            var win = doc.defaultView || doc.parentWindow;
            var sel;
            if (typeof win.getSelection != "undefined") {
                sel = win.getSelection();
                if (sel.rangeCount > 0) {
                    var range = win.getSelection().getRangeAt(0);
                    var preCaretRange = range.cloneRange();
                    preCaretRange.selectNodeContents(element);
                    preCaretRange.setEnd(range.endContainer, range.endOffset);
                    caretOffset = preCaretRange.toString().length;
                }
            } else if ((sel = doc.selection) && sel.type != "Control") {
                var textRange = sel.createRange();
                var preCaretTextRange = doc.body.createTextRange();
                preCaretTextRange.moveToElementText(element);
                preCaretTextRange.setEndPoint("EndToEnd", textRange);
                caretOffset = preCaretTextRange.text.length;
            }
            return caretOffset;
        }

        function parentElRec(tag, elem) {
            if (!elem || !elem.classList || elem.classList.contains('editor-view')) return false;

            if (tag === elem.tagName.toLowerCase())
                return elem;

            return parentElRec(tag, elem.parentNode);
        }

        /** Select element **/
        function selectElement(el) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(el);
            // range.selectNode(el);
            selection.removeAllRanges();
            selection.addRange(range);
        }

        /** Get parent node
         * @returns {ParentNode} **/
        function parentNode() {
            return window.getSelection().anchorNode.parentNode;
        }

        /** Checks if the passed child has the passed parent **/
        function childOf(child, parent) {
            return parent.contains(child);
        }

        /** Sets the current selected format buttons active/inactive **/
        function selectionChange(e) {
            // elementPath();
            countContentChars();

            // if (container.tagName.toLowerCase() == 'textarea') container.value = visualView.innerHTML;

            // Buttons active status
            for (let i = 0; i < buttons.length; i++) {
                let button = buttons[i];

                // don't remove active class on code toggle button
                if (button.dataset.action === 'toggle-view') continue;

                button.classList.remove('active');

                if(!button.classList.contains('active') && button.classList.contains('icon-unlink')) {
                    button.classList.add('disabled');
                }
            }
            paletteBtn.classList.remove('colored');
            if (!paletteBtn.classList.contains('colored')) {
                paletteBtn.children[0].style = null;
                paletteItems.forEach(item => {item.classList.remove('active')});
                // colorPicker.parentElement.classList.remove('active');
            }

            if (!childOf(window.getSelection().anchorNode.parentNode, editor)) return false;

            parentTagActive(window.getSelection().anchorNode.parentNode);
        }

        /** Sets the tag active that is responsible for the current element **/
        function parentTagActive(elem) {
            if (!elem || !elem.classList || elem.classList.contains('editor-view')) return false;

            let toolbarButton;

            // active by tag names
            let tagName = elem.tagName.toLowerCase();
            toolbarButton = document.querySelectorAll(`.toolbar .editor-btn[data-tag-name="${tagName}"]`)[0];
            if (toolbarButton) {
                toolbarButton.classList.add('active');

                if(toolbarButton.classList.contains('active') && toolbarButton.classList.contains('icon-unlink')) {
                    toolbarButton.classList.remove('disabled');
                }

                if (tagName === 'span') {
                    toolbarButton.classList.add('colored');
                    coloredLine.style.backgroundColor = getComputedStyle(window.getSelection().anchorNode.parentNode).color;
                    paletteItems.forEach(item => {
                        if (getComputedStyle(item).backgroundColor === getComputedStyle(window.getSelection().anchorNode.parentNode).color) {
                            item.classList.add('active');
                        }
                    })
                    paletteBtn.classList.remove('active');
                }
            }

            // active by text-align
            let textAlign = elem.style.textAlign;
            toolbarButton = document.querySelectorAll(`.toolbar .editor-btn[data-style="textAlign:${textAlign}"]`)[0];
            if (toolbarButton)
                toolbarButton.classList.add('active');

            return parentTagActive(elem.parentNode);
        }

        /** Adds a paragraph tag when the enter key is pressed **/
        function addParagraphTag(evt) {
            if (evt.keyCode == '13') {
                // console.log(window.getSelection().anchorNode.parentNode.classList);
                // console.log(window.getSelection().anchorNode.parentNode.classList.contains('editor-view'));
                // console.log(window.getSelection().anchorNode);
                // console.log(window.getSelection().anchorNode.parentNode.tagName);
                // console.log(window.getSelection().anchorNode.parentNode);


                if (window.getSelection().anchorNode.parentNode.tagName !== 'p'
                    && !(
                        window.getSelection().anchorNode.parentNode.classList.contains('editor-view')
                        ||
                        window.getSelection().anchorNode.parentNode.classList.contains('editor-content-box')
                    )
                ) return false;

                // don't add a P tag on list item
                //if (window.getSelection().anchorNode.parentNode.tagName === 'LI') return false;
                document.execCommand('formatBlock', false, 'p');

            }
        }

        /** Handles the paste event and removes all HTML tags **/
        function pasteEvent(e) {
            e.preventDefault();
            let text = (e.originalEvent || e).clipboardData.getData('text/plain');
            document.execCommand('insertHTML', false, text);
        }

        /** Element path **/
        function elementPath() {
            // Insert DOM elements path
            let path = [];
            let node = window.getSelection().anchorNode.parentNode;

            if (childOf(node, visualView)) {
                while (childOf(node, visualView) && node != visualView && node != contentArea) {
                    path.push(node);
                    node = node.parentNode;
                }

                elementsPathContainer.innerHTML = '';
                path.map(elem => {
                    elementsPathContainer.insertAdjacentHTML("afterbegin", `<span>${elem.nodeName.toLowerCase()}</span>`);
                });

                let elementSpans = Array.from(elementsPathContainer.getElementsByTagName('span'));
                path = path.reverse();

                elementSpans.map((span, i) => {
                    span.addEventListener('click', function (e) {
                        selectElement(path[i]);
                    });
                });
            }
        }

        /** Content chars count **/
        function countContentChars() {
            charsContainer.innerHTML = visualView.textContent.replaceAll(' ', '').length + ' chars';
        }

        /** Toggles between visual and html view **/
        function execCodeAction(button, editor) {
            if (button.classList.contains('active')) { // show visuall view
                // Remove \n and \t from text
                let text = htmlView.value;
                text = text.replace(/<\/(h1|h2|h3|h4|h5|h6|div|p|blockquote|ul|ol|li)>\n*/gi,"<\/$1>");
                text = text.replace(/<(ul|ol)>\n*/gi,"<$1>");
                text = text.replace(/<img(.*?)>\n*/gi,"<img $1>");
                text = text.replace(/\t*<(li)>/gi,"<$1>");
                visualView.innerHTML = text;

                // visualView.innerHTML = htmlView.value; // original
                htmlView.style.display = 'none';
                visualView.style.display = 'block';
                button.classList.remove('active');
            } else { // show html view
                // Add \n and \t to tags, for correct view in textarea
                let text = visualView.innerHTML;
                text = text.replace(/<\/(h1|h2|h3|h4|h5|h6|div|p|blockquote|ul|ol|li)>\n*/gi,"<\/$1>\n");
                text = text.replace(/<(ul|ol)>\n*/gi,"<$1>\n");
                text = text.replace(/<img(.*?)>\n*/gi,"<img $1>\n");
                text = text.replace(/\t*<(li)>/gi,"\t<$1>");
                htmlView.value = text;

                // htmlView.innerText = visualView.innerHTML; // original
                visualView.style.display = 'none';
                htmlView.style.display = 'block';
                button.classList.add('active');
            }
        }

        /** Open in fullscreen **/
        function fullScreen(e) {
            let viewHeight = window.innerHeight - toolbar.getBoundingClientRect().height - toolbarBott.getBoundingClientRect().height - (parseInt(getComputedStyle(contentArea).marginTop.replace(/[a-z]/g, '') * 2)) + 'px';

            editor.classList.toggle('full-screen');
            document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';

            visualView.style.height = visualView.style.height ? null : viewHeight;

            window.addEventListener('load', updateHeight);
            window.addEventListener('resize', updateHeight);
            window.addEventListener('orientationchange', updateHeight);

            function updateHeight() {
                viewHeight = window.innerHeight - toolbar.getBoundingClientRect().height - toolbarBott.getBoundingClientRect().height - (parseInt(getComputedStyle(contentArea).marginTop.replace(/[a-z]/g, '') * 2)) + 'px';

                if (editor.classList.contains('full-screen')) {
                    if (visualView.style.height) {
                        visualView.style.height = viewHeight;
                    } else {
                        visualView.style.height = null;
                    }
                }
            }
        }

        // Popups

        /** Adds a link to the current selection || or add a special symbol to current selection **/
        function execPopupAction(type) {
            if (type === 'createLink') {
                //adds a link to the current selection
                modal.classList.add('link');
                let selection = saveSelection();
                let submit = modal.querySelectorAll('button.done')[0];
                let close = modal.querySelectorAll('.modal-close')[0];
                let bg = modal.querySelectorAll('.modal-bg')[0];

                // done button active => add link
                submit.addEventListener('click', function (e) {
                    e.preventDefault();
                    let newTabCheckbox = modal.querySelectorAll('#new-tab')[0];
                    let linkInput = modal.querySelectorAll('#linkValue')[0];
                    let linkValue = linkInput.value;
                    let newTab = newTabCheckbox.checked;

                    restoreSelection(selection);

                    if (window.getSelection().toString()) {
                        let a = document.createElement('a');
                        a.href = linkValue;
                        if (newTab) a.target = '_blank';
                        window.getSelection().getRangeAt(0).surroundContents(a);
                    }

                    modal.classList.remove('link');
                    linkInput.value = '';

                    // deregister modal events
                    submit.removeEventListener('click', arguments.callee);
                    close.removeEventListener('click', arguments.callee);
                    bg.removeEventListener('click', arguments.callee);
                });

                // close modal on X and BG click
                close.addEventListener('click', function (e) {
                    closeModal(e);
                });

                bg.addEventListener('click', function (e) {
                    closeModal(e);
                });

                //close link modal window func
                function closeModal(e) {
                    e.preventDefault();
                    let linkInput = modal.querySelectorAll('#linkValue')[0];

                    modal.classList.remove('link');
                    linkInput.value = '';

                    // deregister modal events
                    submit.removeEventListener('click', arguments.callee);
                    close.removeEventListener('click', arguments.callee);
                    bg.removeEventListener('click', arguments.callee);
                }
            } else if (type === 'symbols') {
                //add a special symbol to current selection
                modal.classList.add('symbols');
                let close = modal.querySelector('.modal-wrapper.symbols .modal-close');
                let bg = modal.querySelector('.modal-bg');

                let symbols = document.querySelectorAll('.tab-content__symbols span');
                let selection = saveSelection();

                // close modal on X and BG click
                close.addEventListener('click', function (e) {
                    closeModal(e);
                });

                bg.addEventListener('click', function (e) {
                    closeModal(e);
                });

                symbols.forEach(symbol => {
                    symbol.addEventListener('click', insertSymbol)
                })

                //insert symbol to select position
                function insertSymbol() {
                    restoreSelection(selection);
                    let range = document.createRange();
                    range.selectNodeContents(window.getSelection().anchorNode);
                    range.collapse(false);
                    let sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                    document.execCommand('insertText', false, this.textContent);

                    noticeInfo('Inserted: ' + this.textContent);
                }

                //close symbol modal window func
                function closeModal(e) {
                    e.preventDefault();

                    modal.classList.remove('symbols');

                    // deregister modal events
                    close.removeEventListener('click', arguments.callee);
                    bg.removeEventListener('click', arguments.callee);
                    symbols.forEach(symbol => {
                        symbol.removeEventListener('click', insertSymbol)
                    })
                }
            }
        }

        /** Find symbols by title in active tag **/
        function findSymbol() {
            currentActiveSymbols = modal.querySelectorAll('.tab-content.active .tab-content__symbols span');

            searchInput.addEventListener('input', function () {
                let search = this.value.toLowerCase().trim();

                if (search.length > 0) {
                    currentActiveSymbols.forEach((symbol, i) => {
                        if (symbol.getAttribute('title').toLowerCase().indexOf(search) === -1) {
                            symbol.classList.add('hidden');
                        } else {
                            symbol.classList.remove('hidden')
                        }
                    })
                } else {
                    currentActiveSymbols.forEach((symbol, i) => {
                        symbol.classList.remove('hidden')
                    })
                }
            })
        }

        /** Change active tab in symbols popup **/
        function changeTab() {
            let tabs = modal.querySelectorAll('.modal-tab-names .tab'),
                tabsContent = modal.querySelectorAll('.modal-tab-content .tab-content');

            tabs.forEach((tab, i) => {
                tab.addEventListener('click', function () {
                    let activeTab = modal.querySelector('.tab.active'),
                        activeContent = modal.querySelector('.tab-content.active');

                    activeTab.classList.remove('active');
                    activeContent.classList.remove('active');

                    tab.classList.add('active');
                    tabsContent[i].classList.add('active');

                    findSymbol();
                })
            })

            findSymbol()
        }

        /** Saves the current selection **/
        function saveSelection() {
            if (window.getSelection) {
                sel = window.getSelection();

                if (sel.getRangeAt && sel.rangeCount) {
                    let ranges = [];

                    for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                        ranges.push(sel.getRangeAt(i));
                    }

                    return ranges;
                }
            } else if (document.selection && document.selection.createRange) {
                return document.selection.createRange();
            }

            return null;
        }

        /** Loads a saved selection **/
        function restoreSelection(savedSel) {
            if (savedSel) {
                if (window.getSelection) {
                    sel = window.getSelection();
                    sel.removeAllRanges();
                    for (var i = 0, len = savedSel.length; i < len; ++i) {
                        sel.addRange(savedSel[i]);
                    }
                } else if (document.selection && savedSel.select) {
                    savedSel.select();
                }
            }
        }

        /** Get color from palette **/
        function getColor() {
            resetColor.addEventListener('mousedown', function (e) {
                e.preventDefault();
            })
            resetColor.addEventListener('click', function () {
                let currentActive = toolbar.querySelector('.palette__item.active');

                currentActive?.classList.remove('active');

                paletteBtn.classList.remove('colored');

                coloredLine.style.backgroundColor = null;

                document.execCommand('removeFormat', false, 'span');
            })

            paletteItems.forEach(color => {
                color.addEventListener('mousedown', function (e) {
                    e.preventDefault();
                })
                color.addEventListener('click', function () {
                    let rgbaColor = getComputedStyle(color).backgroundColor,
                        itemColor = rgbaToHex(getComputedStyle(color).backgroundColor),
                        currentActive = toolbar.querySelector('.palette__item.active');

                    currentActive?.classList.remove('active');
                    this.classList.add('active');

                    paletteBtn.classList.add('colored');

                    coloredLine.style.backgroundColor = itemColor;

                    document.execCommand('styleWithCSS', false, true);
                    document.execCommand('foreColor', false, rgbaColor);
                })
            })

            const rgbaToHex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`
        }
        getColor();


        /** Select table cells **/
        function tablePicker() {
            let tableCells = toolbar.querySelectorAll('.table td'),
                tableWidth = toolbar.querySelector('.table__width'),
                tableHeight = toolbar.querySelector('.table__height');

            let colCount = 0;
            let rowCount = 0;

            tableCells.forEach((cell, i) => {
                cell.addEventListener('mousedown', function (e) {
                    e.preventDefault();
                })

                cell.addEventListener('mouseenter', function (e) {
                    if (e.target.tagName !== "TD") return;
                    let td = e.target;
                    let tr = td.parentNode;
                    let table = tr.parentNode;
                    colCount = td.cellIndex + 1;
                    rowCount = tr.rowIndex + 1;

                    for (let row of table.rows) {
                        let inside = row.rowIndex < rowCount;

                        for (let rowCell of row.cells) {
                            rowCell.classList.toggle("selected", inside && rowCell.cellIndex < colCount);
                        }
                    }

                    tableWidth.textContent = colCount;
                    tableHeight.textContent = rowCount;
                    return false;
                })

                cell.addEventListener('click', function () {
                    let selection = saveSelection();
                    restoreSelection(selection);
                    let range = document.createRange();
                    range.selectNodeContents(window.getSelection().anchorNode);
                    range.collapse(false);
                    let sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);

                    let table = document.createElement('table');
                    table.innerHTML = '<tbody></tbody>';

                    for (let x = 1; x <= parseInt(tableHeight.textContent); x++) {
                        table.children[0].insertAdjacentHTML('afterbegin', `<tr></tr>`);
                    }

                    let tr = table.querySelectorAll('tr');

                    for (let y = 1; y <= parseInt(tableWidth.textContent); y++) {
                        tr.forEach(item => {
                            item.insertAdjacentHTML('afterbegin', `<td></td>`);
                        })
                    }

                    document.execCommand('insertHTML', false, table.outerHTML);
                })
            })
        }
        tablePicker();
    }
}());