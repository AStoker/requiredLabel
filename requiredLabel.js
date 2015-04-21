define(['jquery', 'knockout'],
    function ($, ko) {
        ko.bindingHandlers.requiredLabel = {
            init: function (element, valueAccessor) {
                // Initially create the required element next to the label
                var valUnwraped = ko.unwrap(valueAccessor()),
                    requiredColor = ko.unwrap(valUnwraped.color) || 'red',                   
                    
					$requiredStateElem = $("<div data-requiredLabel='iconState' style='display: inline-block; color: "+requiredColor+"; margin-left: 5px; font-weight: bold; height: .8em; width: .8em;'>&#42;</div>").data('requiredLabel', $(element));
                //$wrappedLabelText = $("<span style='display: inline-block;'>"+$(element).html().trim()+"</span>");

                $(element).after($requiredStateElem);

                $(element).attr("title", "Required");
            },
            update: function (element, valueAccessor) {
                // Whenever the value subsequently changes (including on first render/after init)
                var valUnwraped = ko.unwrap(valueAccessor()),
                    completedState = ko.unwrap(valUnwraped.completed),
                    completedColor = ko.unwrap(valUnwraped.completedColor) || 'green';

                if (!completedState) {
                    $(element).next("[data-requiredLabel='iconState']").html("&#42;");
                } else {
                    $(element).next("[data-requiredLabel='iconState']").html("<svg style='fill: green; width: 100%; height: 100%;' viewBox='0 0 500 500'>"+
                        "<path fill='"+completedColor+"' d='M249.5,1C112,1,1,112,1,249.5S112,498,249.5,498S498,387,498,249.5S386.4,1,249.5,1z M385,136.5"+
                        "c-33.2,47.8-113,170.8-146.2,218.6c-5.3,8-12,9.3-19.9,3.3c-34.6-23.3-68.4-47.2-101.7-70.4c-8.6-6-9.3-12-3.3-20.6"+
                        "c4-6,8-11.3,12-17.3c6-8,12-9.3,20.6-3.3c21.9,15.3,43.2,29.9,64.5,45.2c2,1.3,4,2.7,6.6,4.7c2-2.7,3.3-4.7,4.7-6.6"+
                        "c24.6-34.6,95-144.8,119.6-180.1c8-11.3,13.3-12,23.9-4c5.3,3.3,10,7.3,15.3,10.6C389.7,121.9,391,127.9,385,136.5z' />"+
                    "</svg>");
                }
            }
        };
    });