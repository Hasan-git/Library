import { Component, OnInit } from '@angular/core';
import * as orgchart from 'orgchart'
// declare var orgchart: any;
declare var $: any;

@Component({
  selector: 'app-orgchart',
  templateUrl: './orgchart.component.html',
  styleUrls: ['./orgchart.component.scss']
})
export class OrgchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    setTimeout(() => {

      $(document).ready(() => {
        var this_ = this

        $(function () {
          var ds = {
            'name': 'البصيرة',
            'title': 'مازن فرح',
            'notes': ["وجهات عامة", "علاقات كبيرة"],
            'children': [
              {
                'name': 'منسق',
                'title': 'ساره كمال',
                'notes': ["العمليات اليومية", "إزالة العوائق"],
                'children': [
                  {
                    'name': 'مبيعات / تسويق',
                    'title': 'الين زاهر',
                    'notes': ["علاقات العملاء", "فرص النمو."],
                    'children': [
                      { 'name': 'كمال رشيد', 'title': 'موظف' , 'notes': ["تسويق", "توجيه الزبائن"],},
                      { 'name': 'جميل كرم', 'title': 'موظف' , 'notes': ["تسويق", "مبيعات"],},
                    ]
                  },
                  {
                    'name': ' مدير قسم التسليم ',
                    'title': 'وسيم سماحة',
                    'notes': ["التسليم", "العمليات"],
                    'children': [
                      { 'name': 'جاد كميل', 'title': 'موظف', 'notes': ["مراجعات", "تسليم"], },
                      { 'name': 'سامح وزني', 'title': 'موظف', 'notes': ["مراجعات", "تسليم"], },
                      { 'name': 'ديانا منصور', 'title': 'موظف', 'notes': ["إزالة العوائق", "اشراف و تدقيق"], }

                    ]
                  },
                  { 'name': 'المالية', 'title': 'جاد طاهر', 'notes': ["محاسبة / قانوني", "الموارد البشرية / المشرف "], },

                ]
              },
            ]
          };

          var nodeTemplate = function (data) {
            return `
                    <div class="title">${data.name}</div>
                    <div class="content e-title">${data.title}</div>
                    `;
          };


          var oc = $('#chart-container').orgchart({
            'data': ds,
            'nodeTemplate': nodeTemplate,
            'nodeContent': 'title',
            'draggable': true,
            "parentNodeSymbol": false,
            'pan': true,
            'zoom': true,
            'createNode': function ($node, data) {
              // console.log($node, data)

              if (data.notes && data.notes.length) {
                var secondMenu = "";
                data.notes.forEach(element => {
                  secondMenu += `<div class="note">${element}</div>`
                });
                $node.append(secondMenu)

              }


              // var secondMenuIcon = $('<i>', {
              //     'class': 'oci oci-info-circle second-menu-icon',
              //     click: function () {
              //         $(this).siblings('.second-menu').toggle();
              //     }
              // });
              // var secondMenu = '<div class="second-menu"><img class="avatar" src="img/avatar/' + data.id + '.jpg"></div>';
            }
          });

          oc.$chart.on('nodedrop.orgchart', function (event, extraParams) {
            console.log('draggedNode:' + extraParams.draggedNode.children('.title').text()
              + ', dragZone:' + extraParams.dragZone.children('.title').text()
              + ', dropZone:' + extraParams.dropZone.children('.title').text()
            );
            if (!window.confirm('Are you sure to adjust the position of ' + extraParams.draggedNode.children('.title').text())) {
              event.preventDefault();
            }
          });

          $('.e-title').click(() => {
          })

        });
      })
    }, 1000);
  }

}
