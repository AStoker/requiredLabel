define(['jquery', 'knockout'],
    function ($, ko) {
        ko.bindingHandlers.requiredLabel = {
            init: function (element, valueAccessor) {
                // Initially create the required element next to the label
                var valUnwraped = ko.unwrap(valueAccessor()),
                    requiredColor = ko.unwrap(valUnwraped.color) || 'red',                    
                    $scopedCSS = $("<style scoped>" +
                                        ".requiredLabel-icon-container { " +
                                            "display: inline-block;" +
                                        "}" +
                                        ".requiredLabel-icon-state { " +
                                            "color: " + requiredColor + ";" +
                                            "margin-left: 5px;" +
                                            "font-weight: bold;" +
                                            "height: .8em;" +
                                            "width: .8em;" +
                                        "}" +
                                        ".requiredLabel-icon-state svg{ " +
                                            "fill: green;" +
                                            "width: 100%;" +
                                            "height: 100%;" +
                                        "}" +
                                        ".requiredLabel-text { " +
                                            "display: inline-block;" +
                                        "}" +
                                  "</style>");
                $requiredStateElem = $("<div class='requiredLabel-icon-container'><div class='requiredLabel-icon-state'>&#42;</div></div>"),
                $wrappedLabelText = $("<span class='requiredLabel-text'>"+$(element).html().trim()+"</span>");

                $(element).html($wrappedLabelText[0])
                          .prepend($scopedCSS)
                          .append($requiredStateElem);

                $(element).attr("title", "Required");
            },
            update: function (element, valueAccessor) {
                // Whenever the value subsequently changes (including on first render/after init)
                var valUnwraped = ko.unwrap(valueAccessor()),
                    completedState = ko.unwrap(valUnwraped.completed),
                    completedColor = ko.unwrap(valUnwraped.completedColor) || 'green';

                if (!completedState) {
                    $(element).find(".requiredLabel-icon-state").html("&#42;");
                } else {
                    $(element).find(".requiredLabel-icon-state").html("<svg viewBox='0 0 500 500'>"+
                        "<path fill='"+completedColor+"' d='M249.5,1C112,1,1,112,1,249.5S112,498,249.5,498S498,387,498,249.5S386.4,1,249.5,1z M385,136.5"+
                        "c-33.2,47.8-113,170.8-146.2,218.6c-5.3,8-12,9.3-19.9,3.3c-34.6-23.3-68.4-47.2-101.7-70.4c-8.6-6-9.3-12-3.3-20.6"+
                        "c4-6,8-11.3,12-17.3c6-8,12-9.3,20.6-3.3c21.9,15.3,43.2,29.9,64.5,45.2c2,1.3,4,2.7,6.6,4.7c2-2.7,3.3-4.7,4.7-6.6"+
                        "c24.6-34.6,95-144.8,119.6-180.1c8-11.3,13.3-12,23.9-4c5.3,3.3,10,7.3,15.3,10.6C389.7,121.9,391,127.9,385,136.5z' />"+
                    "</svg>");
                }
            }
        };
    });