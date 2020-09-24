import { Component, OnInit } from '@angular/core';
import { NarrativeService } from '../services/narrative.service';

@Component({
  selector: 'app-balancesheet-narrative',
  templateUrl: './balancesheet-narrative.component.html',
  styleUrls: ['./balancesheet-narrative.component.css']
})
export class BalancesheetNarrativeComponent implements OnInit {
  narrativeToDisplay;
  assetsHeader;
  assetsNarrative;
  liabilitiesHeader;
  liabilitiesNarrative;
  selectedSection;
  constructor(private narrativeService: NarrativeService) { }

  ngOnInit(): void {
    this.narrativeToDisplay = this.narrativeService.narrativeToDisplay
    this.assetsNarrative = this.narrativeService.assetsNarrative;
    this.liabilitiesNarrative = this.narrativeService.LiabilitiesNarrative;
    this.assetsHeader = this.narrativeService.assetsHeader;
    this.liabilitiesHeader = this.narrativeService.LiabilitiesHeader;
    this.selectedSection = this.narrativeService.selectedSection;
    
  }

}
