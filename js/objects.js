class SidebarObject {
    #name = "null";
    #type = "empty"; // Can be empty, text, executable, upFolder, or folder
    #permissionLevel = 99;

    constructor(name, type, permissionLevel) {
        this.#name = name;
        this.#type = type;
        this.#permissionLevel = permissionLevel
    }

    getName() { return this.#name }
    getType() { return this.#type }

    hasPermission(level) {
        if (level >= this.#permissionLevel) { return true; }
        else { return false; }
    }

    getPermissions() {
        permissions = "";
        if (this.#type == "folder") { permissions = permissions + "dr-"; }
        else { permissions = permissions + "-r-"; }
        if (this.#type == "executable") { permissions = permissions + "x"; }
        else { permissions = permissions + "-"; }
        return permissions;
    }
}

export class TextFileObject extends SidebarObject {
    #num_lines = 0;

    constructor(name, permissionLevel) {
        super(name, "text", permissionLevel);
        this.contents = []
    }

    add_line(line) {
        this.contents[this.#num_lines] = line;
        this.#num_lines = this.#num_lines + 1;
    }
}

export class ExecutableObject extends SidebarObject {
    num_lines = 0
    contents = []
    isON = false;

    constructor(name, permissionLevel) {
        super(name, "executable", permissionLevel);
    }

    // run() {

    // }
}

class ReturnFolderObject extends SidebarObject {
    constructor(referenceObject) {
        super("../", "upFolder", 0);
        this.object = referenceObject;
    }
}

export class FolderObject extends SidebarObject {
    #num_items = 0;
    #num_lines = 0;
    #items = [
        new SidebarObject("", "empty", 0),
        new SidebarObject("", "empty", 0),
        new SidebarObject("", "empty", 0),
        new SidebarObject("", "empty", 0),
        new SidebarObject("", "empty", 0)
    ];
    #path = "";

    constructor(name, permissionLevel, parent) {
        super(name, "folder", permissionLevel);
        this.contents = [];
        if (parent != 0) {
            console.log(name);
            console.log("ran nonzero");
            const p = new ReturnFolderObject(parent);
            this.#path = parent.getPath() + this.getName() + "/";
            this.addItem(p);
        }
        else {
            console.log("parent was 0");
            this.#path = this.getName() + "/";
        }
        console.log(this.getPath());
    }

    add_line(line) {
        this.contents[this.#num_lines] = line;
        this.#num_lines = this.#num_lines + 1;
    }

    addItem(object) {
        console.log(object.getName());
        this.#items[this.#num_items] = object;
        this.#num_items = this.#num_items + 1;
    }

    overridePath(s) {
        this.#path = s;
    }

    getPath() {
        return this.#path;
    }

    getItem(index) {
        return this.#items[index];
    }

    getItemName(index) {
        return this.#items[index].getName();
    }
}

// Specific Executable Classes

export class EmptyExe extends ExecutableObject {
    constructor() {
        super("Empty", 0);
        this.isOn = true;
    }

    isRunning() {
        return this.isOn;
    }
}

export class EnterPasswordExe extends ExecutableObject {
    constructor(name, permissionLevel) {
        super(name, permissionLevel);
        this.isOn = true;
        this.contents[0] = "/################\\";
        this.contents[1] = "#:               #";
        this.contents[2] = "\\#########[ OK ]#/";
        this.num_lines = 3;
    }

    isRunning() {
        return this.isON;
    }

    run(keys) {

    }
}