/**
 * Created by keshavdasu on 8/2/17.
 */
const electron = require("electron"),
    proc = require("child_process"),
    child = proc.spawn(electron, ["."]);