# Practical Vim

## Start a clean, factory resetted vim

$: `nvim -u NONE`

`-u NONE` do not source the vimrc file

For this lesson, use `nvim -u essential.vim`

```vim
" essential.vim
set nocompatible
filetype plugin on
colorscheme morning
hi Normal guibg=NONE ctermbg=NONE
```

## Compound Commands

| Compound Command | Eq in longhand | Explanation                                             |
| ---------------- | -------------- | ------------------------------------------------------- |
| `C`              | `c$`           | Replace text from cursor to end and drop in insert mode |
| `s`              | `cl`           | Replace char under cursor and drop in insert mode       |
| `S`              | `^C` or `cc`   | Replace entire line and drop in insert mode             |

Repeat a `{motion}` with `;`

`f{char}` to find next {char}
`;` repeat previous motion

## Repeatable actions

| Intend                              | Act                 | Repeat | Reverse |
| ----------------------------------- | ------------------- | ------ | ------- |
| Make a change                       | {edit}              | `.`    | `u`     |
| Scan line for next {char}           | `f{char}` `t{char}` | `;`    | `,`     |
| Scan document for next match        | /pattern`<CR>`      | `n`    | `N`     |
| Perform substitution                | :s/target/replace   | `&`    | `u`     |
| Execute sequence of changes (macro) | `qx{macro}q`        | `@x`   | `u`     |
| Repeat any Ex command               | `:{command}`        | `@:`   | `u`     |

## Search

### `:substitute` command

`:%s/search/replace/g`

`%s//<replace>/g` Replace currently hightlighted word (when using `*`)

### `*` key

Will search for the word under the cursor

### Enable and stop Search highlights

`:nohlsearch` `:noh` to stop current search highlights
`:set hls` to enable hightlights if disabled

| Trigger | Effect                                      |
| ------- | ------------------------------------------- |
| `c`     | Change                                      |
| `d`     | Delete                                      |
| `y`     | Yank                                        |
| `g~`    | Swap case                                   |
| `gu`    | Make lowercase                              |
| `gU`    | Make uppercase                              |
| `>`     | Shift right                                 |
| `<`     | Shift left                                  |
| `=`     | Autoindent                                  |
| `!`     | Filter {motion} through an external program |

`gu` and `gU` can be combined, just like `gc`:
`gUaw` uppercase current word
`gUU` uppercase current line
`gUap` uppercase current paragraph

## Keystrokes available while in insert mode

`C-h` or `<backspace>` Delete back one character
`C-w` Delete back one word
`C-u` Delete back to the start of the line
`C-j` Go down one line

### Get back to normal mode

`Esc` or `C-[` Switch to normal mode
`C-o` Switch to Insert Normal mode

### Insert normal mode

`<C-o>{command}` Entrer Insert Normal Mode to execute {command}
`<C-r>{register}` Paste {register}: `+` or `*` System clipboard, `0` Default register
`<C-r>={expression}` Evaluate {expression}
`<C-v>u{code}` Insert special unicode character, in hexadecimal

## Ex Commands

`:1` Jump to the top of the file
`$` Jump to the bottom of the file
`:p` Print the current line
You can combine the command, ex: `:1p` Jump to the top and print line
Or specifiy a range, ex: `:1,5p` Print from line 1 to 5

`:<{start},{end}>{command}`

`:.,$p` Print from current line to end of document
`:%p` Print entire document, similar to `:%s/{search}/{replace}` for the substitution command

`<{start}+n, {end}-n>{command}` Using range with offset

| Symbol     | Address                                                            |
| ---------- | ------------------------------------------------------------------ |
| 1          | First line of the file                                             |
| $          | Last line for the file                                             |
| 0          | Virtual line above first line of the file                          |
| .          | Line where the cursor is placed                                    |
| 'm         | Line containing mark `m`                                           |
| '<         | Start of visual selection                                          |
| '>         | End of visual selection                                            |
| %          | The entire file (shorthand for :1,$                                |
|            | \_                                                                 |
| `:6t.`     | Copy line 6 to just below the current line                         |
| `:6t`      | Copy the curret line to just below line 6                          |
| `:t.`      | Duplicate the current line, = `yyp` but doesn't override registers |
| `:t$`      | Copy the current line to the end of the file                       |
| `:'<,'>t0` | Copy the visually selected `'<,'>` lines to the start of the file  |

`:copy` or `:t` ex command to copy a line, ex `6t.` copy 6th line and paste it after cursor
`:move` or `:m` ex command to move a line, ex `:'<,'>m$` Move visually selected lines to end of file
`:normal` or `:norm` ex command to execute normal mode chords, ec `:%norm A;` add ; to end of every line

`@:` Repeat last Ex command

### Reveal list of possible completion

Use `C-d` to show a list of suggestions, then `tab` / `shift-tab` to cycle through the list

### Copy word that was under cursor while in command mode

Use `C-r C-w` to copy the word into the command mode
`C-r C-a` to copy the WORD
