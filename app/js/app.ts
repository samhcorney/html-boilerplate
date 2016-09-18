import 'svgxuse';
import { TestService } from './services/test.service';

export class MyApp {

    constructor ( private testService: TestService ) {

        this.test();
    }

    private test () : void {

        console.log( this.testService.getTestText() );
    }
}

new MyApp( new TestService() );
