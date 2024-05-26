# Express-Api-Template
This repository is having the base template which has been pulled into all other repositories for the REST API develepment.

1. Copy the template in to your own repository - Steps described below.

2. Open the template in your chosen text editor. Recommendations: 'VS Code'.

3. Peform an npm install by using: 'npm i or npm install'

**Steps to Pull this Template in any GTHUB repo***

### 1. Navigate to the API repository (Directory) where you want to pull express-api Template

### 2. Create a Branch for new changes and remove old node dependencies

```git checkout -b 'feature/newChanges'``` ###  *You can Create any BranchName Of Your Choice -> Please don't make changes in main/master branch.*


```rm -rf node_modules package-lock.json```  ### *Removing old Dependencies*

### 3. Add the REST API Template in your Repo

```git remote add template https://github.com/abhisheksahuabhi/express-api-template.git```

```git fetch --all```

### 4. Merge the respective Branch and resolve Conflicts

```git merge template/main --allow-unrelated-histories``` ## *we can pull any branch instead of main. # Here we need to specify template/branch_name*

```git add .```

```rm -rf package-lock.json```

Resolve the Conflicts in Package.JSON, gitIgnore and readme.md —> Just accept the incoming changes except for readme.

### 5. Install npm package
```npm i```


## Folder structure for your repo

```
├── README.md
├── .env
├── .gitignore
├── app.js
├── node_modules
├── package-lock.json
├── package.json
└── src
    ├── api
    │   ├── Controllers
    │   ├── Middleware
    │   ├── Models
    │   └── Routes
    ├── config
    ├── services
    └── util
    