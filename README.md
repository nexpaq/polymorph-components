# polymorph-components
Polymer components that look native on each platform we used

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Getting Started:
You can clone the repository to create a local copy on your computer. 

  1. Navigate to the main page of the repository in Github

  2. Click **Clone or download** and copy the clone URL for the repository

  3. Open your Terminal and change the current working directory to the location where you want the cloned directory to be made and Type **`git clone`** or **`git clone --recursive`**, and then paste the URL you copied in Step 2. The `--recursive` is for the git submodules that this repository have and that flag will make sure the submodule's content is cloned as well.  

  4. Then **`$ cd polymorph-components/`**

  5. Run **`$ bower install`** to install all packages in your bower.json and any packages that it depends on in the local bower_components folder

  6. Important: This repository has folders which are [git submodules][Git Submodules]. If you ran only `git clone` with no `--recursive` flag, please run the command below to ensure that you will have all of the submodule's content. You also need to run this everytime you add a new submodule to this repository. You can skip this if the content are already there (if you ran `git clone --recursive` earlier)

  ```bash
    $ git submodule update --init --recursive
  ``` 

  For more info about git submodules here's a good [blog post][Git Submodules Blog] to read.
## Running A Local Server
  To Run local server on your machine
  
  1. Open another tab  or window of your terminal

  2. Use **`polymer serve`** 

  ```bash
    $ polymer serve
  ```

  - and if running correctly, this message will appear

  ```bash
  info:   Files in this directory are available under the following URLs
        applications: http://127.0.0.1:8081
        reusable components: http://127.0.0.1:8081/components/polymorph-components/
  ```

- Copy and paste the reusable components URL `http://127.0.0.1:8081` to your browser

This will be your primary documention for all our Polymorph elements and this will also show relevant demos for them.  

## Adding New Morph Element

ToDo: add steps on how to add new element and explain a little bit about how it works with the documentation and 


  [Git Submodules]: https://github.com/blog/2104-working-with-submodules

  [Git Submodules Blog]: http://dan.mccloy.info/2015/06/11/Git-submodules