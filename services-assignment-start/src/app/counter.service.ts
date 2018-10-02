export class CounterService{
    toActive = 0;
    toInactive = 0;

    toActiveAction(){
        this.toActive+=1;
        console.log('Active actions: ' + this.toActive)
    }

    toInactiveAction(){
        this.toInactive+=1;
        console.log('Inactive actions: ' + this.toInactive)
    }
}