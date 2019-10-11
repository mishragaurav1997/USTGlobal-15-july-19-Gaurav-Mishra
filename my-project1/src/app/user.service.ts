import { Injectable} from '@angular/core';

@Injectable({
providedIn: "root"
})
export class UserService {
users = [{
    name: 'Gaurav',
    company:'UST Global'

},
{
    name:'Shreyas',
    company:'UST Global'
},

{
    name:'Vignesh',
    company:'UST Global'
}
];

}