set nocompatible
set rnu
set hidden
set background=light
"set highlight
"set termguicolors
set hlsearch "use :noh to clear the search highlight

syntax on
filetype plugin on

colorscheme vim
hi Normal guibg=NONE ctermbg=NONE

"disable arrowkeys
noremap <Up> <Nop>
noremap <Down> <Nop>
noremap <Left> <Nop>
noremap <Right> <Nop>
