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

