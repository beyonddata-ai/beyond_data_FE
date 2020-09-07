import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-inputs',
  templateUrl: './filter-inputs.component.html',
  styleUrls: ['./filter-inputs.component.css']
})
export class FilterInputsComponent implements OnInit {
  data = {
    sector:
      [{
        name: 'Oil and Gas Exploration', companies: ["OGDC", "PPL", "POL", "MARI"],
        narrativeSection: [
          { name: 'Balance Sheet', sections: ["Shareholder’s equity", "Non-Current Liabilities", "Current Liabilities", "Non-Current Assets", "Current Assets"] },
          { name: 'Income Statement', sections: ["Revenue & Profit", "Exploration Activities", "Production Data"] }
        ]
      },
      {
        name: 'Oil and Gas Refinery', companies: ["ATTOCK ref", "PAK ref", "NATIONAL ref", "BYCO petroleum"],
        narrativeSection: [
          { name: 'Balance Sheet', sections: ["Shareholder’s equity", "Non-Current Liabilities", "Current Liabilities", "Non-Current Assets", "Current Assets"] },
          { name: 'Income Statement', sections: ["Revenue & Profit", "comparison of profits with dollar and oil price"] }
        ]
      },
      {
        name: 'OilandGasMarketing', companies: ["ATTOCK petroleum", "HASCOL", "HTL", "PSO", "SHELL"],
        narrativeSection: [
          { name: 'Balance Sheet', sections: ["Shareholder’s equity", "Non-Current Liabilities", "Current Liabilities", "Non-Current Assets", "Current Assets"] },
          {name: 'Income Statement', sections: ["Revenue & Profit", "comparison of profits with dollar and oil price"]}
        ]
      },
      {
        name: 'Banks', companies: ["ALFALAH", "ALLIED", "ASKARI", "BANK AL HABIB", "FAYSAL BANK", "HBL", "MCB", "MEEZAN", "STANDARD CHARTERED", "UBL"],
        narrativeSection: [
          { name: 'Balance Sheet', sections: ["shareholder's equity", "Assets", "liabilities"] },
          {
            name: 'Income Statement', sections: ["Markup return interest earned/expensed.", "Total non-markup interest income/expense",
              "Comparison (Total non-markup interest income, total non-markup interest expensed, total income, operating expenses)",
              "Provision/Reversal against loans and advances.", "Taxation"]
          }
        ]
      }
      ],
    narrativeType: ["Balance Sheet", "Income Statement", "Director Report", "Ratios"]
  }

  
  selectedSectorCompanies;
  sections = []
  selectedSector;
  //queryInputs
  selectedSectorName;
  selectedCompany;
  selectedNarrativeType;
  selectedSection;

  selectCompany(sector) {
    this.selectedSector = sector
    this.selectedSectorName = sector.name
    this.selectedSectorCompanies = sector.companies;
     console.log(this.selectedSector.name)
  }

  selectNarrativeType (narrative) {
  this.selectedNarrativeType = narrative;
  console.log(this.selectedNarrativeType);
  for(let narrativetype of this.selectedSector.narrativeSection) {
    //console.log(narrativetype.name)
    //console.log(narrative) 
    if(narrativetype.name === narrative) {
      //console.log(narrativetype.sections)
      const sections = narrativetype.sections
      for(let section of sections) {
        this.sections.push(section)
      }
    }
    else {

    }
   
  }
  console.log(this.sections)
  }

  selected_Company (company) {
    this.selectedCompany = company;
    console.log(this.selectedCompany);
  }

  selectSection(section) {
    this.selectedSection = section;
    console.log(this.selectedSection);
  }

  constructor() { }

  ngOnInit(): void {
   // console.log(this.data.sector)
    //console.log(this.data.sector[3].narrativeSection[0].sections)
  }

  // filterCompany(sector) {
  //   if(sector="Oil and Gas Exploration") {
  //     this.companySearchResults = this.data.company.OilandGasExploration;
  //   }
  //   else if (sector="Oil and Gas Refinery") {
  //     this.companySearchResults = this.data.company.OilandGasRefinery;
  //   }
  //   else if (sector="Oil and Gas Marketing") {
  //     this.companySearchResults = this.data.company.OilandGasMarketing;
  //   } else if (sector="Banks") {
  //     this.companySearchResults = this.data.company.Banks;
  //   }
  //   console.log(this.companySearchResults)
  // }

  searchResults;

  Results() {
    if(this.selectedSectorName === "Oil and Gas Exploration" && this.selectedCompany === "PPL"
    && this.selectedNarrativeType === "Balance Sheet" && this.selectedSection === "Shareholder’s equity") {
      this.searchResults = "This is a dummy narrative for the company PPL which belongs to the SECTOR OIL AND GAS EXPLORATION. The narrative Type is Balance Sheet and The narrative Section is Shareholder's equity"
    } else if (this.selectedSectorName === "Oil and Gas Refinery" && this.selectedCompany === "ATTOCK ref"
    && this.selectedNarrativeType === "Income Statement" && this.selectedSection === "Revenue & Profit") {
      this.searchResults = "This is a dummy narrative for the company Oil which belongs to the SECTOR OIL AND GAS EXPLORATION. The narrative Type is Balance Sheet and The narrative Section is Shareholder's equity"
    }
  } 

}
