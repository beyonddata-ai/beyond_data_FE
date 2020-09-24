import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-data-map-pakistan',
  templateUrl: './data-map-pakistan.component.html',
  styleUrls: ['./data-map-pakistan.component.css']
})
export class DataMapPakistanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let chart = am4core.create("chartdiv", am4maps.MapChart);
    chart.titles.create().text = 'Population of provinces of pakistan according to 2017 consensus';
    chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/pakistanHigh.json";

    chart.geodataSource.events.on("parseended", function (ev) {
      let data = [];
      for (var i = 0; i < ev.target.data.features.length; i++) {
        data.push({
          id: ev.target.data.features[i].id,
          value: Math.round(Math.random() * 10000)
        })
      }
      // polygonSeries.data = data;
      polygonSeries.data = [
        {
          "id": "PK-IS",
          "name": "Islamabad",
          "value": 1015000,
          "fill": am4core.color("#ffffff")
        },
        {
          "id": "PK-JK",
          "name": "Jamu and Kashmir",
          "value": 4045000,
          "fill": am4core.color("#DD2C00")
        },
        {
          "id": "PK-GB",
          "name": "Gilgit Baltistan",
          "value": 1249000,
          "fill": am4core.color("#9575CD")
        }, {
          "id": "PK-BA",
          "name": "Balochistan",
          "value": 12344739,
          "fill": am4core.color("#F57F17")
        },
        {
          "id": "PK-KP",
          "name": "Khyber PakhtunKhwa",
          "value": 30523371,
          "fill": am4core.color("#00BCD4")
        },
        {
          "id": "PK-SD",
          "name": "Sindh",
          "value": 47893244,
          "fill": am4core.color("#66BB6A")
        },
        {
          "id": "PK-PB",
          "name": "Punjab",
          "value": 110017465,
          "fill": am4core.color("#512DA8")
        },

      ];
    })

    chart.projection = new am4maps.projections.Mercator();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: chart.colors.getIndex(1).brighten(1),
      max: chart.colors.getIndex(1).brighten(-0.3)
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    // // Set up heat legend
    // let heatLegend = chart.createChild(am4maps.HeatLegend);
    // heatLegend.series = polygonSeries;
    // heatLegend.align = "right";
    // heatLegend.width = am4core.percent(25);
    // heatLegend.marginRight = am4core.percent(4);
    // heatLegend.minValue = 0;
    // heatLegend.maxValue = 40000000;
    // heatLegend.valign = "bottom";

    // // Set up custom heat map legend labels using axis ranges
    // let minRange = heatLegend.valueAxis.axisRanges.create();
    // minRange.value = heatLegend.minValue;
    // minRange.label.text = "Little";
    // let maxRange = heatLegend.valueAxis.axisRanges.create();
    // maxRange.value = heatLegend.maxValue;
    // maxRange.label.text = "A lot!";

    // // Blank out internal heat legend value axis labels
    // heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function (labelText) {
    //   return "";
    // });


    // Configure series tooltip
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}'s Population: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);


    polygonTemplate.propertyFields.fill = "fill";
  }

}
