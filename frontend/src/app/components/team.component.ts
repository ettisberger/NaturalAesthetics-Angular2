import {Component, OnInit}  from '@angular/core';
import {HTTP_PROVIDERS}     from '@angular/http';
import {WordpressService}   from '../shared';
import {FilterUtil}         from '../utils/filter.util';
import {TeamMember} from  '../models/teammember.model';

@Component({
    selector: 'team',
    template: require('./team.component.html'),
    providers: [WordpressService, HTTP_PROVIDERS, FilterUtil]
})
export class TeamComponent implements OnInit {
    errorMessage: string;
    team: TeamMember[];
    ids: string [];

    constructor (private wordpressService: WordpressService, private filter: FilterUtil) {}

    ngOnInit() {
        this.loadTeamMember();
    }

    loadTeamMember() {
        this.wordpressService.getTeam()
            .subscribe(
                team => {
                    this.team = this.filter.filterTeamByIds(team, this.ids);
                },
                error =>  this.errorMessage = <any>error);
    }
}
