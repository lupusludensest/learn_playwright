node --version
npm init playwright@latest
npx playwright test --headed
npx playwright show-report
npx playwright codegen url_to_be_tested
npx playwright codegen https://the-internet.herokuapp.com/login
install renorex to Chrome
npx playwright test name_of_the_file.js --headed --debug
++++++++++
git config --get core.ignorecase, If this returns true, execute: git config --global core.ignorecase false
and check again: 
git config --get core.ignorecase, git config --global core.ignorecase false, expected -> false
code $HOME\.gitconfig 
++++++++++
//open local git condig
code E:\Gurov_SSD_256\IT\Testing\Automation_08_09_2019\learn_playwright\.git\config  
// open system gitconfig
code "C:\Program Files\Git\etc\gitconfig"
// open global gitconfig
code "C:\Users\rapid\.gitconfig"
