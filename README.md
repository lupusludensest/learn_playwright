# Playwright Learning Playwright

## Setup and Installation

```bash
# Check Node.js version
node --version

# Initialize Playwright project
npm init playwright@latest

# Install Ranorex Webtestit extension for Chrome
# Via Chrome Web Store: Search for "Ranorex Webtestit"
```

## Running Tests

```bash
# Run tests in headed mode
npx playwright test --headed

# Show test report
npx playwright show-report

# Generate tests with Codegen
npx playwright codegen url_to_be_tested
# Example:
npx playwright codegen https://the-internet.herokuapp.com/login

# Run specific test file in headed mode with debug
npx playwright test name_of_the_file.js --headed --debug
```

## Git Configuration

### Case Sensitivity Settings
```bash
# Check if Git is case-insensitive
git config --get core.ignorecase

# If returns true, set to case-sensitive
git config --global core.ignorecase false

# Verify the change
git config --get core.ignorecase  # Should return false
```

### Git Config File Locations

```bash
# Open global Git config
code $HOME\.gitconfig

# Open local Git config
code E:\Gurov_SSD_256\IT\Testing\Automation_08_09_2019\learn_playwright\.git\config

# Open system Git config
code "C:\Program Files\Git\etc\gitconfig"

# Open user-specific Git config
code "C:\Users\rapid\.gitconfig"
```