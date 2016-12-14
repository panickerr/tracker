/* global Highcharts */

(function () {
    'use strict';
    angular.module('app')
            .service('service', service);
   
    function service($http,URL,$rootScope,$state,URL2) {
            this.mastersrv=mastersrv;
            this.csi_filterfunction=csi_filterfunction;
            this.barchart = barchart;
            this.plainbar=plainbar;
            this.plainbar1=plainbar1;
            this.barline=barline;
            this.verticalline=verticalline;
            this.multigraph=multigraph;
            this.stackedgraph=stackedgraph;
            this.stackmultigraph=stackmultigraph;
            this.donutchart=donutchart;
            this.linechart=linechart;
            this.progressbar=progressbar;
            this.mastersrv2=mastersrv2;
            this.avgbarchart=avgbarchart;
            this.avgbarchart3=avgbarchart3;
            this.simplebar=simplebar;
            this.multigraph5=multigraph5;
            this.avgbarchartxs=avgbarchartxs;
            this.treemap=treemap;

    //filters    
    function csi_filterfunction(){
        $rootScope.Filterarray=[];
           
            mastersrv2("Filters-getMonths").then(function (result) {
                var timeperiods=result.data;
                    timeperiods.push("IQS Eligibility");
//                     timeperiods.push("Trailing 3 Months");
               
                $rootScope.Filterarray.timeperiod=timeperiods;
                });
           
            mastersrv2("Filters-getModels").then(function (result) {
                $rootScope.Filterarray.model=result.data;
            });
            
            mastersrv2("Filters-getFuelTypes").then(function (result) {
                $rootScope.Filterarray.fuel=result.data;
            });
             
            mastersrv2("Filters-getCities").then(function (result) {
                $rootScope.Filterarray.city=result.data;
            });  
            
             mastersrv2("Filters-getProblems").then(function (result) {
                $rootScope.Filterarray.problems=result.data;
            });
            
              mastersrv2("Filters-getAdditionalProblems").then(function (result) {
                $rootScope.Filterarray.meanproblems=result.data;
            });
            
             mastersrv2("Filters-getAdditionalDistributionProblems").then(function (result) {
                $rootScope.Filterarray.distproblems=result.data;
            });
            
//              mastersrv2("Filters-getDrilldownProblems").then(function (result) {
//                $rootScope.Filterarray.drilldown=result.data;
//            });

             service.mastersrv2("Filters-getDownloads").then(function (result) {
                   
                    $rootScope.Filterarray.download=result.data;
                });

            
    }
    
//filter end



Highcharts.setOptions({
    chart: {
           backgroundColor: '#FAFAFA',
        style: {
            fontFamily: 'Roboto Condensed'
        }
    }
});
        
        
//THE MASTER SERVICE replace in filter
function mastersrv(actionstr,obj) {
        var tempurl=URL+actionstr;
        if(obj){
            for(var k=0; k < obj.length;k++){
                tempurl=tempurl+"&"+obj[k].name;    
                tempurl=tempurl+"="+obj[k].value;   
              }
        }
        
        console.log(tempurl);
        var temp= $http({
             method :"GET",
             url : tempurl,
             dataType: "jsonp"
        });
        return temp;
    }
    
    
           
//THE MASTER SERVICE replace in filter
function mastersrv2(actionstr,obj) {
        var tempurl=URL2+actionstr;
        if(obj){
            for(var k=0; k < obj.length;k++){
                tempurl=tempurl+"&"+obj[k].name;    
                tempurl=tempurl+"="+obj[k].value;   
              }
        }
        console.log(tempurl);
        var temp= $http({
             method :"GET",
             url : tempurl,
             dataType: "jsonp"
        });
        return temp;
    }


//bar chart service
function avgbarchart(avgvalue,url,type,color,data,margin,lineheight,weight,spacing,seriesname,fontsize,stepsize,maxlength) {
     var tempbar={
            chart: {
               type: type,
                marginLeft: margin, backgroundColor: '#FAFAFA'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: [],
                 lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0,
                title: {
                    text: null
                      },
                labels: {
                     
                          style: {fontSize: '1.8vmin',
                          lineHeight: lineheight
                      }
                },
                legend: {
                    enabled: false
                }
            },
            yAxis: {
                max: maxlength,
                min: 0,
                 plotLines: [{
                            color: 'green',
                            value: avgvalue,
                             dashStyle: 'dash',
                             label: {
                        text: 'Hyundai Average : ' + avgvalue,
                        style: {
                        fontWeight: 'light',
                        fontSize:'2vmin'
                    }
                        
                    },
                            width: '1',
                            zIndex: 5
                        }],
                title: {
                    text: null
                },
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                gridLineColor: 'transparent',

                labels: {enabled: false,
                    overflow: 'justify'
                }
            },

            plotOptions: {
                    series: {
                        pointWidth: weight,
                          minPointLength: 0,
//                        groupPadding: 10,
//                        groupPadding: 10,
//                         pointPadding: .1,
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function () {
                                    $rootScope.drilldown=this.name;
                                    var statego='triangular.'+url;
                                    $state.go(statego,{ dealer : $rootScope.drilldown });
                                  }
                               }
                        }
                    },
                    bar:{
                        dataLabels: {
                            enabled: true,
                            formatter:function() {
                                        var pcnt = this.point.options.bartitle;
                                        return pcnt;
                                    },
                            color: '#ffffff',
                            inside: true,
                            align:'left',
                            style: {
                                textShadow: 'none',
                                fontWeight: 'light',
                                fontSize: '2vmin'
                            }
                        }
                    }  ,
                    column: {
                         stacking: 'percent',
                        dataLabels: {
                            enabled: true,
                            formatter:function() {
                                        var pcnt = this.point.options.bartitle;
                                        return pcnt;
                                    },
                                     color: '#ffffff',
                                    y:30,
                                    align: 'right',
                                     style: {
                                        textShadow: 'none',
                                        fontWeight: 'bold',
                                        fontSize: '2vmin'
                                    }
                        },
                        depth: 25
                    }
            },
            credits: {
                        enabled: false
            },
            legend: {
                enabled: false
            },
            tooltip: {
                 style: {fontSize: '2vmin'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },
            series: [
            {
                color: color,
                data: data,
                name:seriesname
            }
            ]
        }
    ;
    return tempbar;
        
}






//bar chart Model xs
function avgbarchartxs(avgvalue,url,type,color,data,margin,weight,spacing,seriesname,fontsize,stepsize,maxlength) {
     var tempbar={
            chart: {
               type: type,
                marginLeft: margin, backgroundColor: '#FAFAFA'
            },
            title: {
                text: null
            },
             xAxis: {
             categories: [],
                
                 autoRotationLimit: 10,
             
              labels: {
                  formatter: function() {
                             if(this.value=="Hyundai")
                                    {return '<img src="assets/images/hyundailogo.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span style=" visibility: hidden;" >'+ this.data+ this.data+'</span>';}
                             else if(this.value=="Hyundai i20 Active")
                                    {return '<img src="assets/images/i20Active.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;" >'+this.data+ this.data+'</span>';}
                              else if(this.value=="Hyundai Creta")
                                    {return '<img src="assets/images/Creta.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;" >'+this.data+ this.data+'</span>';}
                              else if(this.value=="Hyundai Elite i20")
                                    {return '<img src="assets/images/Elitei20.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;" >'+ this.data+this.data+'</span>';}
                              else if(this.value=="Hyundai Eon")
                                    {return '<img src="assets/images/EON.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;" >'+this.data+ this.data+'</span>';}
                              else if(this.value=="Hyundai Grand i10")
                                    {return '<img src="assets/images/Grandi10.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;"  >'+ this.data+this.data+'</span>';}
                              else if(this.value=="Hyundai Verna")
                                    {return '<img src="assets/images/Verna.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;"  >'+ this.data+this.data+'</span>';}
                              else if(this.value=="Hyundai Xcent")
                                    {return '<img src="assets/images/xcent.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span style=" visibility: hidden;"  >'+ this.data+this.data+'</span>';}
        //                         style=" visibility: hidden;"
                    
            },
            useHTML: true
                     
//                           
                },
             lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    minorTickLength: 0,
                    tickLength: 0,
                    minPadding: 0.5,
                    maxPadding: 0.5,
            title: {
                text: null
            },
            
             
              legend: {
                    enabled: false
                }
            },
            yAxis: {
                max: maxlength,
                min: 0,
                 plotLines: [{
                            color: 'green',
                            value: avgvalue,
                             dashStyle: 'dash',
                             label: {
                        text: 'Hyundai Average : ' + avgvalue,
                        style: {
                        fontWeight: 'light',
                        fontSize:'2vmin'
                    }
                        
                    },
                            width: '1',
                            zIndex: 5
                        }],
                title: {
                    text: null
                },
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                gridLineColor: 'transparent',

                labels: {enabled: false,
                    overflow: 'justify'
                }
            },

            plotOptions: {
                    series: {
                        pointWidth: weight,
                          minPointLength: 0,
//                        groupPadding: 10,
//                        groupPadding: 10,
//                         pointPadding: .1,
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function () {
                                    $rootScope.sidename=this.name;
                                    $rootScope.imagepath=this.imagepath;
                                    $rootScope.drilldown21=this.name;
                                    $rootScope.rightsidevalue=this.y;
                                    var statego='triangular.'+url;
                                    $state.go(statego,{ dealer : $rootScope.drilldown21 });
                                  }
                               }
                        }
                    },
                    bar:{
                        dataLabels: {
                            enabled: true,
                            formatter:function() {
                                        var pcnt = this.point.options.bartitle;
                                        return pcnt;
                                    },
                            color: '#ffffff',
                            inside: true,
                            align:'left',
                            style: {
                                textShadow: 'none',
                                fontWeight: 'light',
                                fontSize: '2vmin'
                            }
                        }
                    }  ,
                    column: {
                         stacking: 'percent',
                        dataLabels: {
                            enabled: true,
                            formatter:function() {
                                        var pcnt = this.point.options.bartitle;
                                        return pcnt;
                                    },
                                     color: '#ffffff',
                                    y:30,
                                    align: 'right',
                                     style: {
                                        textShadow: 'none',
                                        fontWeight: 'bold',
                                        fontSize: '2vmin'
                                    }
                        },
                        depth: 25
                    }
            },
            credits: {
                        enabled: false
            },
    
            legend: {
                enabled: false
            },
            tooltip: {
                 style: {fontSize: '2vmin'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },
            series: [
            {
                color: color,
                data: data,
                name:seriesname
            }
            ]
        }
    ;
    return tempbar;
        
}





//bar chart service
function avgbarchart3(avgvalue,url,type,color,data,margin,weight,spacing,seriesname,fontsize,stepsize,maxlength) {
     var tempbar={
            chart: {
               type: type,
                marginLeft: margin, backgroundColor: '#FAFAFA'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: [],
                 lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0,
                title: {
                    text: null
                      },
                labels: {
                     
                          style: {fontSize: '2vmin'
//                          lineHeight: 25,
                      }
                },
                legend: {
                    enabled: false
                }
            },
            yAxis: {
                max: maxlength,
                min: 0,
                 plotLines: [{
                            color: 'green',
                            value: avgvalue,
                             dashStyle: 'dash',
                             label: {
                                text: 'Hyundai Average : ' + avgvalue,
                                style: {
                                        fontWeight: 'light',
                                        fontSize:'2vmin'
                                    }

                            },
                            width: '1',
                            zIndex: 5
                        }],
                title: {
                    text: null
                },
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                gridLineColor: 'transparent',

                labels: {
                    enabled: false,
                    overflow: 'justify'
                }
            },

            plotOptions: {
                    series: {
                        pointWidth: weight,
                          minPointLength: 0,
//                        groupPadding: 10,
//                        groupPadding: 10,
//                         pointPadding: .1,
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function () {
                                    $rootScope.drilldown3=this.name;
                                     $rootScope.sidename=this.name;
                                    $rootScope.rightsidevalue=this.y;
                                    var statego='triangular.'+url;
                                    $state.go(statego,{ dealer : $rootScope.drilldown3 });
                                  }
                               }
                        }
                    },
                    bar:{
                        dataLabels: {
                            enabled: true,
                            formatter:function() {
                                        var pcnt = this.point.options.bartitle;
                                        return pcnt;
                                    },
                            color: '#ffffff',
                            inside: true,
                            align:'left',
                            style: {
                                textShadow: 'none',
                                fontWeight: 'light',
                                fontSize: '2vmin'
                            }
                        }
                    }  ,
                    column: {
                         stacking: 'percent',
                        dataLabels: {
                            enabled: true,
                            formatter:function() {
                                        var pcnt = this.point.options.bartitle;
                                        return pcnt;
                                    },
                                     color: '#ffffff',
                                    y:30,
                                    align: 'right',
                                     style: {
                                        textShadow: 'none',
                                        fontWeight: 'bold',
                                        fontSize: '2vmin'
                                    }
                        },
                        depth: 25
                    }
            },
            credits: {
                        enabled: false
            },
    
            legend: {
                enabled: false
            },
            tooltip: {
                 style: {fontSize: '2vmin'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },
            series: [
            {
                color: color,
                data: data,
                name:seriesname
            }
            ]
        }
    ;
    return tempbar;
        
}



//bar chart service
function barchart(url,type,color,data,margin,fontsize,lineheight,weight,spacing,seriesname,stepsize,maxlength) {
     var tempbar={
            chart: {
               type: type,
                marginLeft: margin, backgroundColor: '#FAFAFA'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: [],
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0,
                title: {
                    text: null
                      },
                labels: {
                     
                          style: {fontSize: '1.8vmin',
                          lineHeight: lineheight
                      }
                },
                legend: {
                    enabled: false
                }
            },
            yAxis: {
                max: 20,
                min: 0,
                title: {
                    text: null
                },
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                gridLineColor: 'transparent',

                labels: {enabled: false,
                    overflow: 'justify'
                }
            },

            plotOptions: {
                    series: {
                        pointWidth: weight,
//                        groupPadding: 10,
//                        groupPadding: 10,
//                         pointPadding: .1,
                          minPointLength: 0,
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function () {
                                    $rootScope.drilldown=this.name;
                                    var statego='triangular.'+url;
                                    $state.go(statego,{ dealer : $rootScope.drilldown });
                                  }
                               }
                        }
                    },
                    bar:{
                        dataLabels: {
                            enabled: true,
                            formatter:function() {
                                        var pcnt = this.point.options.bartitle;
                                        return pcnt;
                                    },
                            color: '#ffffff',
                            inside: true,
                            align:'left',
                            style: {
                                textShadow: 'none',
                                fontWeight: 'light',
                                fontSize: '2vmin'
                            }
                        }
                    }  ,
                    column: {
                         stacking: 'percent',
                        dataLabels: {
                            enabled: true,
                            formatter:function() {
                                        var pcnt = this.point.options.bartitle;
                                        return pcnt;
                                    },
                                     color: '#ffffff',
                                    y:30,
                                    align: 'right',
                                     style: {
                                        textShadow: 'none',
                                        fontWeight: 'light',
                                        fontSize: '2vmin'
                                    }
                        },
                        depth: 25
                    }
            },
            credits: {
                        enabled: false
            },

            legend: {
                enabled: false
            },
            tooltip: {
                 style: {fontSize: '2vmin'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },
            series: [
            {
                color: color,
                data: data,
                name:seriesname
            }
            ]
        }
    ;
    return tempbar;
        
}


function plainbar(xstrue,avgvalue,url,type,color,data,seriesname,margin,weight,spacing,pointdata,markersize,colorpoint,labelenable,xaxistitle) {
       
      
     
       if(labelenable == undefined){
           labelenable=true;
       }
     
        var tempbar={
            chart: {
               type: type,
               marginLeft: margin,
                spacingBottom: 5, 
                backgroundColor: '#FAFAFA'
               
            },
            colors:color,
            title: {
                text: '',
                style: {
                    display: 'none'
                }
            },

            xAxis: {
             categories: [],
                
                 autoRotationLimit: 10,
             
              labels: {
                  formatter: function() {
                      if(xstrue == false){
                              if(this.value=="Hyundai")
                                    {return '<img src="assets/images/hyundailogo.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span style=" visibility: hidden;" >'+ this.data+ this.data+'</span>';}
                             else if(this.value=="Hyundai i20 Active")
                                    {return '<img src="assets/images/i20Active.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;" >'+this.data+ this.data+'</span>';}
                              else if(this.value=="Hyundai Creta")
                                    {return '<img src="assets/images/Creta.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;" >'+this.data+ this.data+'</span>';}
                              else if(this.value=="Hyundai Elite i20")
                                    {return '<img src="assets/images/Elitei20.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;" >'+ this.data+this.data+'</span>';}
                              else if(this.value=="Hyundai Eon")
                                    {return '<img src="assets/images/EON.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;" >'+this.data+ this.data+'</span>';}
                              else if(this.value=="Hyundai Grand i10")
                                    {return '<img src="assets/images/Grandi10.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;"  >'+ this.data+this.data+'</span>';}
                              else if(this.value=="Hyundai Verna")
                                    {return '<img src="assets/images/Verna.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;"  >'+ this.data+this.data+'</span>';}
                              else if(this.value=="Hyundai Xcent")
                                    {return '<img src="assets/images/xcent.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span style=" visibility: hidden;"  >'+ this.data+this.data+'</span>';}
        //                         style=" visibility: hidden;"
                          }
                      else if(xstrue == true){
                           if(this.value=="Hyundai")
                                    {return '<img src="assets/images/hyundailogo.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span style=" visibility: hidden;" >'+ this.data+ '</span>';}
                             else if(this.value=="Hyundai i20 Active")
                                    {return '<img src="assets/images/i20Active.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;" >'+this.data+ '</span>';}
                              else if(this.value=="Hyundai Creta")
                                    {return '<img src="assets/images/Creta.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;" >'+this.data+ '</span>';}
                              else if(this.value=="Hyundai Elite i20")
                                    {return '<img src="assets/images/Elitei20.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;" >'+ this.data+'</span>';}
                              else if(this.value=="Hyundai Eon")
                                    {return '<img src="assets/images/EON.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;" >'+this.data+ '</span>';}
                              else if(this.value=="Hyundai Grand i10")
                                    {return '<img src="assets/images/Grandi10.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;"  >'+ this.data+'</span>';}
                              else if(this.value=="Hyundai Verna")
                                    {return '<img src="assets/images/Verna.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span  style=" visibility: hidden;"  >'+ this.data+'</span>';}
                              else if(this.value=="Hyundai Xcent")
                                    {return '<img src="assets/images/xcent.png" alt="" style="vertical-align: middle; width: 100px; height: 32px"/> <span style=" visibility: hidden;"  >'+ this.data+'</span>';}
        //                         style=" visibility: hidden;"
                      }
            },
            useHTML: true
                     
//                           
                },
             lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    minorTickLength: 0,
                    tickLength: 0,
                    minPadding: 0.5,
                    maxPadding: 0.5,
            title: {
                text: null
            },
            
             
              legend: {
                    enabled: false
                }
                    },
            yAxis: { gridLineWidth: 0,
                plotLines: [{
                            color: 'green',
                            label: {
                        text: 'Hyundai Average : '+ avgvalue,
                        style: {
                        fontWeight: 'light',
                        fontSize:'2vmin'
                    }
                             },
                    
                    dashStyle: 'dash',
                            value: avgvalue,
                            width: '1',
                            zIndex: 5
                        }],
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    }
            },
            plotOptions: {
             series: {
                pointWidth: weight,
                pointPadding: 0,
                groupPadding: 0.2,
                  
                   point: {
                            events: {
                                click: function () {
                                    $rootScope.sidename=this.name;
                                    $rootScope.imagepath=this.imagepath;
                                    $rootScope.drilldown21=this.name;
                                    $rootScope.rightsidevalue=this.y;
                                    var statego='triangular.'+url;
                                    $state.go(statego,{ dealer : $rootScope.drilldown21 });
                                  }
                               }
                        }
                 
             },
                    
                   
            column: {
                
                 dataLabels: {
                    enabled: true,
                             color: '#ffffff',
                            y:40,
                            align: 'center',
                             style: {
                                //color: '#FFFFFF',
                                textShadow: 'none',
                                fontWeight: 'light',
                                fontSize: '2vmin'
                            }
                        },
                    depth: 25,
                    pointPadding: 0,
                    groupPadding: 0,
                    colorByPoint: true
            }
         },
            credits: {
                        enabled: false
            },
              tooltip: {
                 style: {fontSize: '2vmin'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },

            legend: {
                enabled: false
            },

           exporting: {
            allowHTML: true
        },
            series: [
                {
                    data: data
                    
                }
            ]
    }
    ;
    return tempbar;
}





function simplebar(data,color,weight) {
     
        var tempbar={
            chart: {
               type: 'column',
                spacingBottom: 50, backgroundColor: '#FAFAFA'
               
            },
            colors:color,
            title: {
                text: '',
                style: {
                    display: 'none'
                }
            },

            xAxis: {
             categories: [],
             
             lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            minorTickLength: 0,
            tickLength: 0,
            minPadding: 0.5,
            maxPadding: 0.5,
                    
            title: {
                text: null
            },
            
              labels: {
                          style: {fontSize: '2vmin'}
                },
              legend: {
                    enabled: false
                }
                    },
            yAxis: { gridLineWidth: 0,
                
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    }
            },
            plotOptions: {
             series: {
                   pointWidth: weight
             },
                    
                   
            column: {
                
                 dataLabels: {
                    enabled: true,
                             color: '#ffffff',
                            y:40,
                            align: 'center',
                             style: {
                                //color: '#FFFFFF',
                                textShadow: 'none',
                                fontWeight: 'light',
                                fontSize: '2vmin'
                            }
                        },
                 
                        groupPadding: 0,
                        depth: 25,
                        colorByPoint: true
                        
                    
            }
         },
           tooltip: {
                 style: {fontSize: '2vmin'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },
            credits: {
                        enabled: false
            },

            legend: {
//                itemStyle: {
//                    fontWeight: 'bold',
//                    fontSize: '2vmin'
//                }
 enabled: false
            },

          
            series: [{
            data:data
                }]
    }
    ;
    return tempbar;
}




function plainbar1(navi,type,color,data,seriesname,margin,weight,spacing,pointdata,markersize,colorpoint,labelenable,xaxistitle) {
       
       var sdata=[];
       var scattername=[];
       for(var i=0; i<data.length;i++){
           sdata[i]=data[i].svalue;
       }
       
       for(var i=0; i<data.length;i++){
           scattername[i]=data[i].name;
       }
       
       var bestname=data[0].scatter;
       
       if(labelenable == undefined){
           labelenable=true;
       }
       
        var tempbar={
            chart: {
               type: type,
               marginLeft: margin, backgroundColor: '#FAFAFA'
            },
            colors:color,
            title: {
                text: '',
                style: {
                    display: 'none'
                }
            },

            xAxis: {
//              max:1000,
                categories: scattername,
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0,
                minPadding: 0.5,
                maxPadding: 0.5,
                title: {
                    text: xaxistitle
                },
                "labels": {
                      enabled: labelenable,
//                        "overflow": "justify",
                       style: {fontSize: 15},
                        step: 1
                },
                legend: {
                    enabled: false
                }
            },
            yAxis: {
//              min:250,
                max:1000,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
            },
            plotOptions: {
                series: {
                  cursor: 'pointer',
                   point: {
                        events: {
                            click: function () {
                                if(navi=='true')
                                $state.go('triangular.admin-default.page2_1_1',{ dealer : 'broken magic' });
                              }
                           }
                        }
                 },
                scatter: {
                    dataLabels: {
                        enabled: true,
                        align: 'left',
                        x: 5,
                        y: 12,
                        marker: {
                            radius: 8,
                            fillColor: 'blue'
                        },
                        style: {
                            fontWeight: 'normal'
                        }
                    },
                    tooltip: {
                        pointFormat: '<b> </b><br> {point.y}'
                    }
                },
                bar:{
                    dataLabels: {
                        enabled: true,
                        formatter:function() {
                                    var pcnt = this.point.options.bartitle;
                                    return pcnt;
                        },
                        color: '#ffffff',
                        inside: true,
                        align:'right',
                        style: {
                            //color: '#FFFFFF',
                            textShadow: 'none',
                            fontWeight: 'bold',
                            fontSize: '2vmin'
                        }
                    }
                }   , 
                column: {
                    dataLabels: {
                        enabled: true,
                        formatter:function() {
                                    var pcnt = this.point.options.bartitle;
                                    return pcnt;
                        },
                        color: '#ffffff',
                        y:30,
                        align: 'center',
                        style: {
                            //color: '#FFFFFF',
                            textShadow: 'none',
                            fontWeight: 'bold',
                            fontSize: '2vmin'
                        }
                    },
                     tooltip: {
                 style: {fontSize: '14pt'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },
                    pointWidth: weight,
                    groupPadding: spacing,
                    depth: 25,
                    colorByPoint: colorpoint
                }
            },
            credits: {
                        enabled: false
            },

            legend: {
                enabled: false
            },

           
            series: [
                {
                    data: data,
                    name: seriesname
                },
                 {
                    type: 'scatter',
                    color:'#689F38',
                    data: sdata,
                    name: bestname,
                    marker: {
                        symbol: 'diamond',
                        radius : markersize
                    }
                }
            ]
    }
    ;
    return tempbar;
}


function barline(color,data,catsize,tooltipsize){
    var bestdata=[];
    var linedata=[];
    var bestname= data[0].bestname;
    var avgname=data[0].linename;
    for(var i=0; i<data.length;i++){
       bestdata[i]=data[i].bestvalue;
       linedata[i]=data[i].linescore;

    }
       
    var tempbline={
        
        chart: {
            zoomType: 'xy',
            marginTop: 5, backgroundColor: '#FAFAFA'
        },
        colors:color,
        title: {
            text: null
        },
        xAxis: [{
            categories: ['Week 1','Week 2','Week 3','Week 4'],
            gridLineWidth: 0,
//            lineColor: 'transparent',
            tickLength: 0,
            minorGridLineWidth: 0,
             "labels": {
                      enabled: true,
//                        "overflow": "justify",
                       style: {fontSize: catsize},
                        step: 1
                }
        }],
        yAxis: [{ // Primary yAxis
            gridLineWidth: 0,
            lineColor: 'transparent',
            tickLength: 0,
            minorGridLineWidth: 0,
            title: {
                text: null
                },
            labels: {
                        enabled: false
                }
        },
        { // Secondary yAxis
            title: {
                text: null
                },
            labels: {
                enabled: false
                },
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            
            opposite: true
        }],
        
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        tooltip: {
            shared: true,
             style: {fontSize: tooltipsize}
            
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                 maxPointWidth: 50
//                 cursor: 'pointer',
//                        point: {
//                            events: {
//                                click: function () {
//                                    alert('Category: ' + this.category + ', value: ' + this.y);
//                                }
//                            }
//                        }
            },
//            scatter: {
//                dataLabels: {
//                    enabled: true,
//                    align: 'left',
//                    allowOverlap: true,
//                    x: 5,
//                    y: 12,
//                    format: '{y}%',
//                    marker: {
//                        radius: 8,
//                        fillColor: 'blue'
//                    },
//                    style: {
//                        fontWeight: 'normal'
//                    }
//                },
//                tooltip: {
//                    pointFormat: '<b> </b><br> {point.y}%'
//                }
//            },  
            spline: {
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    x: 5,
                    y: 12,
                    marker: {
                        radius: 8,
                        fillColor: 'blue'
                    },
                    style: {
                        fontWeight: 'normal',fontSize: '2vmin'
                    }
                }, 
                tooltip: {
                    pointFormat: '<b> </b><br> {point.y}%'
                }
            },  
            column: {
                dataLabels: {
                    enabled: true,
                    formatter:function() {
                                        var pcnt = this.point.options.bartitle;
                                        return pcnt;
                    },
                    color: '#ffffff',
                    y:50,
                    align: 'right',
                    style: {
                        //color: '#FFFFFF',
                        textShadow: 'none',
                        fontWeight: 'light',
                        fontSize: '2vmin'
                    }
                },
                depth: 25
//              colorByPoint: colorpoint
            }
        },
        credits: {
                    enabled: false
        },
        series: 
            [
                {
                    type: 'column',
                    data: data,
                    name:'Graph'
                },
//                {
//                    type: 'scatter',
//                    color:'#689F38',
//                    data: bestdata,
//                    name:bestname,
//                    marker: {
//                         symbol: 'diamond',
//                         radius : 5
//                    }
//                },
                 {
                    type: 'spline',
                    data: linedata,
                    name:avgname,
                    color:'#5B9BD5',
//                    marker: {
//                        symbol: 'diamond',
//                        radius : 5
//                    }
                }
            ]
    };
    return tempbline;
}


function verticalline(color,inverted,data,halign,valign,labelflag,ymin,ymax,yline){
    var tempvline={
        
                chart: {
                   type: 'spline',
                    inverted: inverted, backgroundColor: '#FAFAFA'

                },
                colors:color,
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
//                
                legend: {
                        itemStyle: {
                                    fontSize: '2vmin'
                        },
                        enabled: true,
                        layout: 'horizontal',
                        align:'left',
                        verticalAlign:'top',
                        y: 5
                },

                xAxis: {
                    categories: [],
                    
                    labels: {
                        style: {
                                fontSize: '2vmin'
                        }
                    }
                },
               
                yAxis: {
                    gridLineWidth: 0,
                    minorGridLineWidth: 0,
                     lineWidth: yline,
                     tickWidth: yline,
                     min: ymin,
                    max: ymax,
                    plotLines: [{
                            color: '#9E9E9E',
                            width: 3,
                            value: 0
                        }],
                           title: {
                                text: null
                            },
                    labels: {
                         enabled: labelflag,
                        style: {
                            fontSize: '2vmin'
                        },
                        formatter: function () {
                            return this.value + '%';
                        }
                    }
                },
                tooltip: {
                 style: {fontSize: '14pt'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },
                series: data
    };
    return tempvline;
}




function treemap(data){
    console.log('data',data);
    console.log(data);
    var dummy=[];
    dummy=data;
    console.log('dummy',dummy);
    var tempvline={
        
                chart: {
//                    type: "treemap",
//                    layoutAlgorithm: 'stripes',
//                    alternateStartingDirection: true,

                },
                colors:['#ED7D31','#A5A5A5','#FFC000','#5B9BD5'],
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },

                xAxis: {
                    categories: [],
                    labels: {
                        style: {
                                fontSize: '2vmin'
                        }
                    }
                },
                tooltip: {
                 style: {fontSize: '14pt'},
//                formatter: function() {
//                    var s =
//                        this.point.options.tooltip;
//                    return s;
//                },
                crosshairs: false
            },
                series: [{
                            type: "treemap",
                            colorByPoint: true,
                            layoutAlgorithm: 'stripes',
                            alternateStartingDirection: true,
                            levels: [{
                                level: 1,
                                layoutAlgorithm: 'sliceAndDice',
                                dataLabels: {
                                    enabled: false,
                                    }
                            }],
                            data:dummy  
//                                    [
//                                      {
//                                        "name": "week1",
//                                        "value": 13.4194
//                                      },
//                                      {
//                                        "name": "week2",
//                                        "value": 13.3844
//                                      },
//                                      {
//                                        "name": "week3",
//                                        "value": 13.2553
//                                      },
//                                      {
//                                        "name": "week4",
//                                        "value": 13.36
//                                      }
//                                    ]
                        }],
    };
    console.log('tempvline',tempvline);
    return tempvline;
    
}






function multigraph(response,colorbypoint, color) {
    var categories=[];
    var paddingGroup=0.2;
    if(response[0].data.length == 1){
        paddingGroup=0.3;
    }
    else if(response[0].data.length == 2){
        paddingGroup=0.3;
    }

    var multi_return = 
            {
                "chart": {
                      "type": "column", backgroundColor: '#FAFAFA'
                },
               
                colors:color,   

                 tooltip: {
                 style: {fontSize: '2vmin'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },

                plotOptions: {
                     column: {
                          maxPointWidth: 90,
                        pointPadding: 0,
                        borderWidth: 0,
                         groupPadding: paddingGroup
            },
                       series: {
                           dataLabels: {
                            enabled: true,
                            formatter:function() {
                                        var pcnt = this.point.options.y;
                                        return pcnt;
                                    },
                            inside:true,
                            color: '#ffffff',
                            y:5,
                            verticalAlign : 'top',
                            
                            style: {
                                textShadow: 'none',
                            fontWeight: 'light',
                                fontSize: '2vmin'
                            }
                       }
                    }
                },
                "series": response,
                "title": {
                    "text": null
                },
                "credits": {
                    "enabled": false
                },
                "loading": false,
                "size": {},
                "xAxis": {
                        categories: categories,
                         labels: {
                     
                          style: {fontSize: '2vmin',
                          lineHeight: 25
                      }
                },
                        currentMin: 0,
                        tickLength: 0
                },
                "yAxis": {
                       title: {
                            text: null,
                            align: 'high'
                        },
                        labels: {
                             enabled: false
                        }
                },
                legend: {
                    itemStyle: {
                        fontWeight: 'bold',
                        fontSize: '2vmin'
                    }
                }
           };
    return multi_return;
        
}



function multigraph5(response,colorbypoint, color) {
    var categories=[];
    var paddingGroup=0.2;
    
    if(response[0].data.length == 1){
        paddingGroup=0.5;
    }
    else if(response[0].data.length == 2){
        paddingGroup=0.3;
    }

    var multi_return = 
            {
                "chart": {
                      "type": "column", backgroundColor: '#FAFAFA'
                },
               
                colors:color,   

                 tooltip: {
                 style: {fontSize: '2vmin'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },

                plotOptions: {
                     column: {
                          maxPointWidth: 90,
                        pointPadding: 0,
                        borderWidth: 0,
                         groupPadding: paddingGroup
                    },
                       series: {
                           dataLabels: {
                            enabled: true,
                            formatter:function() {
                                        var pcnt = this.point.options.y;
                                        return pcnt;
                                    },
                            inside:true,
                            color: '#ffffff',
                            y:15,
                            verticalAlign : 'top',
                            
                            style: {
                                textShadow: 'none',
                        fontWeight:'light',
                                fontSize: '1.5vmin'
                            }
                       }
                    }
                },
                "series": response,
                "title": {
                    "text": null
                },
                "credits": {
                    "enabled": false
                },
                "loading": false,
                "size": {},
                "xAxis": {
                        categories: categories,
                         labels: {
                     
                          style: {fontSize: '2vmin',
                          lineHeight: 25
                      }
                },
                        currentMin: 0,
                        tickLength: 0
                },
                "yAxis": {
                       title: {
                            text: null,
                            align: 'high'
                        },
                        labels: {
                             enabled: false
                        }
                },
                legend: {
                    itemStyle: {
                        fontWeight: 'bold',
                        fontSize: '2vmin'
                    }
                }
           };
    return multi_return;
        
}


function stackmultigraph(response,color,pointwidth,fontsize,grouppadding) {
    var multi_return = 
            {
                "chart": {
                  "type": "column", backgroundColor: '#FAFAFA'
                },

                colors:color,   
                 tooltip: {
                 style: {fontSize: '14pt'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },
                plotOptions: {
                        series: {
                        pointWidth:pointwidth,
                        groupPadding: grouppadding,
                        minPointLength: 20,
                        dataLabels: {
                            enabled: true,
                            formatter:function() {
                                        var pcnt = this.point.options.bartitle;
                                        return pcnt + "%";
                                    },
                            inside:true,
                            color: '#ffffff',
                            y:-5,
                            verticalAlign : 'top',
                            
                            style: {
                                textShadow: 'none',
                                fontSize: fontsize
                            }
                       }
                    }
                },
                "series":response,
                "title": {
                    "text": null
                },
                "credits": {
                    "enabled": false
                },
                "loading": false,
                "size": {},
                "xAxis": {
                        gridLineWidth: 0,
                        categories: [],
                        currentMin: 0,
                         tickLength: 0,
                       lineColor: 'transparent',
                        minorGridLineWidth: 0
                      
                },
                "yAxis": {
                       title: {
                            text: null,
                            align: 'high'
                        },
                        labels: {
                        enabled: false
                        },
                        gridLineWidth: 0,
                        allowDecimals: true,
                        min: 0
                    
               },
               legend: {
                     enabled: true
                }
           };
    return multi_return;
        
}


function stackedgraph(data,color){

    var stack=
    {
        chart: {
            type: 'column',
            marginRight: 15, backgroundColor: '#FAFAFA'
        },
//        colors:["#7F7F7F","#FFD919","#89C660","#4472C4","#00A1DE","#72C7E7","#3C8A2E"],
    colors:['#FFC000','#808080','#A9D08E','#305496','#FFD966','#002060','#92D050','#000000'] ,
        title: {
            text: null
        },
        xAxis: {
            categories: [],            
            gridLineWidth: 0,
            lineColor: 'transparent',
            tickLength: 0,
            minorGridLineWidth: 0,
            labels: {
                     
                          style: {fontSize: '2vmin',
                          lineHeight: 25
                      }
                }
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            gridLineColor: 'transparent',

            labels: {enabled: false,
                overflow: 'justify'
            }
        },
       legend: {
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '2vmin'
        }
    },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    
                    style: {
                        textShadow: 'none',
                        fontWeight: 'light',
                        fontSize: '2vmin'
                    },
                    color: '#FFFFFF',
                    inside: true
                },
                stacking: 'percent'
            }
        },
         tooltip: {
                 style: {fontSize: '2vmin'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },
        series:data,
        "credits": {
                    "enabled": false
                  }
    };
    return stack;
}



function donutchart(response) {
    var borderWidth=2 ;
          if( response.length === 1 ) {
                     borderWidth = 0;
                    }
    var donut = 
            {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false ,
                type: 'pie', backgroundColor: '#FAFAFA'
            },
            colors:['#FFC000','#808080','#A9D08E','#305496','#FFD966','#002060','#92D050','#000000'] ,
             title: {
            text: ''
             },

            plotOptions: {
                pie: {
                     borderWidth: borderWidth,
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        distance:-40,
                        format: '<b>{point.y}</b>',
                        style: {
                            color:'#FFFFFF',
                            fontWeight: 'light', 
                            fontSize: '2vmin',
                            textShadow: false 
                        }
                    },
                        showInLegend: true
                }
            },
           
            series: [{
                    name:null,
                 innerSize: '60%',
                colorByPoint: true,
                data:response
                         
            }],
        
         tooltip: {
                 style: {fontSize: '2vmin'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },
        legend: {
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '2vmin'
        }
    },
        
        "credits": {
                    "enabled": false
                  }
    };
    return donut;
}



function linechart(response) {
          
    var line = 
            {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10, backgroundColor: '#FAFAFA'
            },
            colors:['#FFC000','#808080','#A9D08E','#305496','#FFD966','#002060','#92D050','#000000'] ,
            title: {
                text: ''
            },
            xAxis: {
                categories:[],
                 labels: {
                     
                          style: {fontSize: '2vmin',
                          lineHeight: 25
                      }
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                 labels: {enabled: false,
                overflow: 'justify'
            }
            },
             tooltip: {
                 style: {fontSize: '2vmin'},
                formatter: function() {
                    var s =
                        this.point.options.tooltip;
                    return s;
                },

                crosshairs: false
            },
           legend: {
                itemStyle: {
                    fontWeight: 'bold',
                    fontSize: '2vmin'
                }
            },
           
            series: response,
        "credits": {
                    "enabled": false
                  }
       };
    return line;
}
    
    
    
    function progressbar(data){
        
    }
    
    }
})();




