var fs = require('fs'),
    path = require('path');

function bootsie_file_filter (conf){
    function __get_db_file(target_name, name){
        var target_folder = conf.directories.database;
        //console.log(target_folder);
        if(target_name == 'template') {
            target_folder = conf.directories.templates;
        }
        var file_path = path.join(target_folder, name);
        return fs.readFileSync( file_path );
    }
    function __render(target_name, content){
        var file_content = __get_db_file(target_name, content);

        try {
            file_content = JSON.parse(file_content);
            // if came to here, then valid

        } catch(e) {
            if (content.lastIndexOf('.json') !== -1) {
                console.log("Not valid json file, will be parsed as markup: " + root[key]);
            }
        }

        return file_content;
    }

    return {
        render:__render
    }
}
module.exports = bootsie_file_filter;
