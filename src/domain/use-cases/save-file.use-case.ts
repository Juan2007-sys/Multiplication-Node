import * as fs from 'fs';

export interface SaveFileUseCase{
    excute: (options: Options) => boolean;
}

export interface Options{
    filecontent: string;
    destination?: string;
    filename?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /**
         * DI - Dependency Injection
         */
    ){}

    excute({filecontent,
        destination = 'output',
        filename = 'tabla'
    }: Options ): boolean {
        try {

            fs.mkdirSync(`./${destination}`, { recursive: true });
            fs.writeFileSync(`./${destination}/${filename}.txt`, filecontent);
            // console.log('File created successfully');
            return true;
            
        } catch (error) {
            console.error('Error creating file:', error);
            return false;
            
        }
    }

}