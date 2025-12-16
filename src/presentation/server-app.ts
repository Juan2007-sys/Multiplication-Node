import { Createtable } from '../domain/use-cases/creat-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface RunOptions {
    base: number;
    limit: number;
    show: boolean;
    fileName: string;
    fileDestination: string;
}

export class ServerApp {

    static run({base, limit, show, fileName, fileDestination}: RunOptions){
        
        console.log('Server App Running...');

        const table = new Createtable().excute({base, limit});
        const wasCreated = new SaveFile()
        .excute({filecontent: table,
            destination: fileDestination,
            filename: fileName
            
        });  
        

        if (show) console.log(table);

         (wasCreated)
         ? console.log('File created successfully')
            : console.log('Error creating file');

    }
    
}