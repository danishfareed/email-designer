import { createContext, useRef, useContext, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const EmailEditorContext = createContext();

export const EmailEditorProvider = ({children})=>{
  const { theme, colorTheme } = useContext(ThemeContext);
  const [isEditorReady, setisEditorReady] = useState(false)
 
  const emailEditorRef = useRef(null);

    
    const onLoad = () => {
      // editor instance is created
      // you can load your template here;
      const templateJson = {
        "body": {
            "id": "RW_X2vrISB",
            "rows": [{
                "id": "bpU7W9Fr57",
                "cells": [1],
                "values": {
                    "_meta": {
                        "htmlID": "u_row_1",
                        "htmlClassNames": "u_row"
                    },
                    "anchor": "",
                    "columns": false,
                    "padding": "0px",
                    "hideable": true,
                    "deletable": true,
                    "draggable": true,
                    "selectable": true,
                    "hideDesktop": false,
                    "duplicatable": true,
                    "backgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "cover": false,
                        "center": true,
                        "repeat": false,
                        "fullWidth": true
                    },
                    "displayCondition": null,
                    "columnsBackgroundColor": ""
                },
                "columns": [{
                    "id": "H_l-3VZn9t",
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_1",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": "#000000"
                    },
                    "contents": [{
                        "id": "jBEqBmT6gi",
                        "type": "image",
                        "values": {
                            "src": {
                                "url": "https://cdn.templates.unlayer.com/assets/1658407362571-Logo.png",
                                "width": 3239,
                                "height": 1211,
                                "maxWidth": "20%",
                                "autoWidth": false
                            },
                            "_meta": {
                                "htmlID": "u_content_image_1",
                                "htmlClassNames": "u_content_image"
                            },
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "anchor": "",
                            "altText": "Logo",
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "src": {
                                        "maxWidth": "30%",
                                        "autoWidth": false
                                    },
                                    "containerPadding": "40px 10px 30px"
                                }
                            },
                            "deletable": true,
                            "draggable": true,
                            "textAlign": "center",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "40px 10px 30px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "---Ck7OzQg",
                        "type": "heading",
                        "values": {
                            "text": "TIME IS",
                            "_meta": {
                                "htmlID": "u_content_heading_1",
                                "htmlClassNames": "u_content_heading"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "fontSize": "45px",
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "fontSize": "32px"
                                }
                            },
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "defaultFont": true
                            },
                            "lineHeight": "100%",
                            "selectable": true,
                            "headingType": "h1",
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "10px 10px 0px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "pdsWWx7y0j",
                        "type": "heading",
                        "values": {
                            "text": "<strong>RUNNING OUT!</strong>",
                            "_meta": {
                                "htmlID": "u_content_heading_2",
                                "htmlClassNames": "u_content_heading"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "fontSize": "50px",
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "fontSize": "35px"
                                }
                            },
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "defaultFont": true
                            },
                            "lineHeight": "120%",
                            "selectable": true,
                            "headingType": "h1",
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "0px 10px 10px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "peuGuvfe2n",
                        "type": "text",
                        "values": {
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspen disse ultrices gravida. Risus commodo viverra </p>",
                            "_meta": {
                                "htmlID": "u_content_text_1",
                                "htmlClassNames": "u_content_text"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "containerPadding": "10px 15px 30px"
                                }
                            },
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "10px 35px 5px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "WKv_OqZyv-",
                        "type": "timer",
                        "values": {
                            "_meta": {
                                "htmlID": "u_content_timer_1",
                                "htmlClassNames": "u_content_timer"
                            },
                            "width": {
                                "width": "75%",
                                "autoWidth": false
                            },
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "anchor": "",
                            "altText": "Countdown",
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "width": {
                                        "width": "100%",
                                        "autoWidth": false
                                    }
                                }
                            },
                            "countdown": {
                                "id": "bxaEKGFpNapx",
                                "width": 660,
                                "height": 147,
                                "locale": null,
                                "endTime": "2022-07-28T00:19:30",
                                "loading": false,
                                "timezone": "America/Los_Angeles",
                                "digitColor": "#FFFFFF",
                                "labelColor": "#FFFFFF",
                                "showLabels": true,
                                "refreshedAt": 1658388847897,
                                "countdownUrl": "https://countdown.unlayer.com/generate/bxaEKGFpNapx",
                                "digitFontSize": 75,
                                "labelFontSize": 28,
                                "backgroundColor": "#000000",
                                "digitFontFamily": "Open Sans",
                                "labelFontFamily": "Open Sans"
                            },
                            "deletable": true,
                            "draggable": true,
                            "textAlign": "center",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "30px 10px 20px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "7S4-pthQ1E",
                        "type": "text",
                        "values": {
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\"><span style=\"font-size: 20px; line-height: 28px;\">Here is a coupon code just for you!</span></p>",
                            "_meta": {
                                "htmlID": "u_content_text_12",
                                "htmlClassNames": "u_content_text"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "lineHeight": "140%",
                                    "containerPadding": "10px 30px"
                                }
                            },
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "10px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "38RUvmWmrE",
                        "type": "button",
                        "values": {
                            "href": {
                                "name": "web",
                                "attrs": {
                                    "href": "{{href}}",
                                    "target": "{{target}}"
                                },
                                "values": {
                                    "href": "https://www.unlayer.com",
                                    "target": "_blank"
                                }
                            },
                            "size": {
                                "width": "40%",
                                "autoWidth": false
                            },
                            "text": "<strong>COUPON: UNLAYER</strong>",
                            "_meta": {
                                "htmlID": "u_content_button_1",
                                "htmlClassNames": "u_content_button"
                            },
                            "anchor": "",
                            "border": {},
                            "padding": "10px 20px",
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "size": {
                                        "width": "66%",
                                        "autoWidth": false
                                    }
                                }
                            },
                            "deletable": true,
                            "draggable": true,
                            "textAlign": "center",
                            "lineHeight": "120%",
                            "selectable": true,
                            "hideDesktop": false,
                            "borderRadius": "4px",
                            "buttonColors": {
                                "color": "#FFFFFF",
                                "hoverColor": "#FFFFFF",
                                "backgroundColor": "#de2f42",
                                "hoverBackgroundColor": "#3AAEE0"
                            },
                            "duplicatable": true,
                            "calculatedWidth": 232,
                            "calculatedHeight": 37,
                            "containerPadding": "10px 10px 30px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "iIdFHLi38Z",
                        "type": "divider",
                        "values": {
                            "_meta": {
                                "htmlID": "u_content_divider_3",
                                "htmlClassNames": "u_content_divider"
                            },
                            "width": "79%",
                            "anchor": "",
                            "border": {
                                "borderTopColor": "#ffffff",
                                "borderTopStyle": "solid",
                                "borderTopWidth": "1px"
                            },
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "textAlign": "center",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "10px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "YdSkhyoyXr",
                        "type": "text",
                        "values": {
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\">The Best Product </p>",
                            "_meta": {
                                "htmlID": "u_content_text_3",
                                "htmlClassNames": "u_content_text"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "30px 10px 0px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "M6BHrA5Q_m",
                        "type": "text",
                        "values": {
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\"><span style=\"font-size: 20px; line-height: 28px;\"><strong>NEW ARRIVALS</strong></span></p>",
                            "_meta": {
                                "htmlID": "u_content_text_4",
                                "htmlClassNames": "u_content_text"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "5px 10px 10px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "SX1XHg5mHv",
                        "type": "menu",
                        "values": {
                            "menu": {
                                "items": [{
                                    "key": "1658388609234",
                                    "link": {
                                        "name": "web",
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        },
                                        "values": {
                                            "href": "https://www.unlayer.com",
                                            "target": "_self"
                                        }
                                    },
                                    "text": "Woman"
                                }, {
                                    "key": "1658388619955",
                                    "link": {
                                        "name": "web",
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        },
                                        "values": {
                                            "href": "https://www.unlayer.com",
                                            "target": "_self"
                                        }
                                    },
                                    "text": "Man"
                                }, {
                                    "key": "1658388628369",
                                    "link": {
                                        "name": "web",
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        },
                                        "values": {
                                            "href": "https://www.unlayer.com",
                                            "target": "_self"
                                        }
                                    },
                                    "text": "Shoes"
                                }, {
                                    "key": "1658388633150",
                                    "link": {
                                        "name": "web",
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        },
                                        "values": {
                                            "href": "https://www.unlayer.com",
                                            "target": "_self"
                                        }
                                    },
                                    "text": "Accessories"
                                }]
                            },
                            "_meta": {
                                "htmlID": "u_content_menu_1",
                                "htmlClassNames": "u_content_menu"
                            },
                            "align": "center",
                            "anchor": "",
                            "layout": "horizontal",
                            "padding": "5px 40px",
                            "fontSize": "14px",
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "padding": "5px 10px"
                                }
                            },
                            "deletable": true,
                            "draggable": true,
                            "linkColor": "#ffffff",
                            "separator": "",
                            "textColor": "#ffffff",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "defaultFont": true
                            },
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "0px 10px 20px",
                            "displayCondition": null
                        }
                    }]
                }]
            }, {
                "id": "0TQ9XL_Zwn",
                "cells": [1, 1, 1],
                "values": {
                    "_meta": {
                        "htmlID": "u_row_2",
                        "htmlClassNames": "u_row"
                    },
                    "anchor": "",
                    "columns": false,
                    "padding": "0px",
                    "hideable": true,
                    "deletable": true,
                    "draggable": true,
                    "selectable": true,
                    "hideDesktop": false,
                    "duplicatable": true,
                    "backgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "cover": false,
                        "center": true,
                        "repeat": false,
                        "fullWidth": true
                    },
                    "displayCondition": null,
                    "columnsBackgroundColor": ""
                },
                "columns": [{
                    "id": "h8J27kcXi2",
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_2",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": "#000000"
                    },
                    "contents": [{
                        "id": "2fQT2q2hbQ",
                        "type": "image",
                        "values": {
                            "src": {
                                "url": "https://cdn.templates.unlayer.com/assets/1658407032216-3.png",
                                "width": 172,
                                "height": 217
                            },
                            "_meta": {
                                "htmlID": "u_content_image_2",
                                "htmlClassNames": "u_content_image"
                            },
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "anchor": "",
                            "altText": "image",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "textAlign": "center",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "10px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "jkt5f37_Bw",
                        "type": "text",
                        "values": {
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\"><strong>Product Name</strong></p>",
                            "_meta": {
                                "htmlID": "u_content_text_8",
                                "htmlClassNames": "u_content_text"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "15px 10px 0px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "3X9wNCpyQR",
                        "type": "text",
                        "values": {
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\">This is a new Text block. Change the text.</p>",
                            "_meta": {
                                "htmlID": "u_content_text_10",
                                "htmlClassNames": "u_content_text"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "containerPadding": "5px 75px 10px"
                                }
                            },
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "5px 10px 10px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "V-RvPPFMaw",
                        "type": "button",
                        "values": {
                            "href": {
                                "name": "web",
                                "attrs": {
                                    "href": "{{href}}",
                                    "target": "{{target}}"
                                },
                                "values": {
                                    "href": "https://www.unlayer.com",
                                    "target": "_blank"
                                }
                            },
                            "size": {
                                "width": "100%",
                                "autoWidth": true
                            },
                            "text": "<span style=\"font-size: 14px; line-height: 16.8px;\">Add to cart</span>",
                            "_meta": {
                                "htmlID": "u_content_button_4",
                                "htmlClassNames": "u_content_button"
                            },
                            "anchor": "",
                            "border": {},
                            "padding": "10px 20px",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "textAlign": "center",
                            "lineHeight": "120%",
                            "selectable": true,
                            "hideDesktop": false,
                            "borderRadius": "4px",
                            "buttonColors": {
                                "color": "#FFFFFF",
                                "hoverColor": "#FFFFFF",
                                "backgroundColor": "#de2f42",
                                "hoverBackgroundColor": "#3AAEE0"
                            },
                            "duplicatable": true,
                            "calculatedWidth": 118,
                            "calculatedHeight": 37,
                            "containerPadding": "10px 10px 30px",
                            "displayCondition": null
                        }
                    }]
                }, {
                    "id": "xnyLyq54Ul",
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_3",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": "#000000"
                    },
                    "contents": [{
                        "id": "Ku7UxYlEn-",
                        "type": "image",
                        "values": {
                            "src": {
                                "url": "https://cdn.templates.unlayer.com/assets/1658407047973-2.png",
                                "width": 172,
                                "height": 216
                            },
                            "_meta": {
                                "htmlID": "u_content_image_3",
                                "htmlClassNames": "u_content_image"
                            },
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "anchor": "",
                            "altText": "image",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "textAlign": "center",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "10px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "XXlE1KvRst",
                        "type": "text",
                        "values": {
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\"><strong>Product Name</strong></p>",
                            "_meta": {
                                "htmlID": "u_content_text_5",
                                "htmlClassNames": "u_content_text"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "15px 10px 0px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "fQNV_5S_rd",
                        "type": "text",
                        "values": {
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\">This is a new Text block. Change the text.</p>",
                            "_meta": {
                                "htmlID": "u_content_text_6",
                                "htmlClassNames": "u_content_text"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "containerPadding": "5px 75px 10px"
                                }
                            },
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "5px 10px 10px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "hnJ49myWXA",
                        "type": "button",
                        "values": {
                            "href": {
                                "name": "web",
                                "attrs": {
                                    "href": "{{href}}",
                                    "target": "{{target}}"
                                },
                                "values": {
                                    "href": "https://www.unlayer.com",
                                    "target": "_blank"
                                }
                            },
                            "size": {
                                "width": "100%",
                                "autoWidth": true
                            },
                            "text": "<span style=\"font-size: 14px; line-height: 16.8px;\">Add to cart</span>",
                            "_meta": {
                                "htmlID": "u_content_button_2",
                                "htmlClassNames": "u_content_button"
                            },
                            "anchor": "",
                            "border": {},
                            "padding": "10px 20px",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "textAlign": "center",
                            "lineHeight": "120%",
                            "selectable": true,
                            "hideDesktop": false,
                            "borderRadius": "4px",
                            "buttonColors": {
                                "color": "#FFFFFF",
                                "hoverColor": "#FFFFFF",
                                "backgroundColor": "#de2f42",
                                "hoverBackgroundColor": "#3AAEE0"
                            },
                            "duplicatable": true,
                            "calculatedWidth": 118,
                            "calculatedHeight": 37,
                            "containerPadding": "10px 10px 30px",
                            "displayCondition": null
                        }
                    }]
                }, {
                    "id": "zK8HUYzHHk",
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_4",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": "#000000"
                    },
                    "contents": [{
                        "id": "7d0zw-tMy1",
                        "type": "image",
                        "values": {
                            "src": {
                                "url": "https://cdn.templates.unlayer.com/assets/1658407051971-1.png",
                                "width": 172,
                                "height": 216
                            },
                            "_meta": {
                                "htmlID": "u_content_image_4",
                                "htmlClassNames": "u_content_image"
                            },
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "anchor": "",
                            "altText": "image",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "textAlign": "center",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "10px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "6jovNUd79u",
                        "type": "text",
                        "values": {
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\"><strong>Product Name</strong></p>",
                            "_meta": {
                                "htmlID": "u_content_text_7",
                                "htmlClassNames": "u_content_text"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "15px 10px 0px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "oQ1PY4yDV7",
                        "type": "text",
                        "values": {
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\">This is a new Text block. Change the text.</p>",
                            "_meta": {
                                "htmlID": "u_content_text_9",
                                "htmlClassNames": "u_content_text"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "containerPadding": "5px 75px 10px"
                                }
                            },
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "5px 10px 10px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "VmGjNFcJ-M",
                        "type": "button",
                        "values": {
                            "href": {
                                "name": "web",
                                "attrs": {
                                    "href": "{{href}}",
                                    "target": "{{target}}"
                                },
                                "values": {
                                    "href": "https://www.unlayer.com",
                                    "target": "_blank"
                                }
                            },
                            "size": {
                                "width": "100%",
                                "autoWidth": true
                            },
                            "text": "<span style=\"font-size: 14px; line-height: 16.8px;\">Add to cart</span>",
                            "_meta": {
                                "htmlID": "u_content_button_3",
                                "htmlClassNames": "u_content_button"
                            },
                            "anchor": "",
                            "border": {},
                            "padding": "10px 20px",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "textAlign": "center",
                            "lineHeight": "120%",
                            "selectable": true,
                            "hideDesktop": false,
                            "borderRadius": "4px",
                            "buttonColors": {
                                "color": "#FFFFFF",
                                "hoverColor": "#FFFFFF",
                                "backgroundColor": "#de2f42",
                                "hoverBackgroundColor": "#3AAEE0"
                            },
                            "duplicatable": true,
                            "calculatedWidth": 118,
                            "calculatedHeight": 37,
                            "containerPadding": "10px 10px 30px",
                            "displayCondition": null
                        }
                    }]
                }]
            }, {
                "id": "Gcp1P_93gQ",
                "cells": [1],
                "values": {
                    "_meta": {
                        "htmlID": "u_row_3",
                        "htmlClassNames": "u_row"
                    },
                    "anchor": "",
                    "columns": false,
                    "padding": "0px",
                    "hideable": true,
                    "deletable": true,
                    "draggable": true,
                    "selectable": true,
                    "hideDesktop": false,
                    "duplicatable": true,
                    "backgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "cover": false,
                        "center": true,
                        "repeat": false,
                        "fullWidth": true
                    },
                    "displayCondition": null,
                    "columnsBackgroundColor": ""
                },
                "columns": [{
                    "id": "_c8TGSEtua",
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_5",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": "#000000"
                    },
                    "contents": [{
                        "id": "S1eQoaWH2z",
                        "type": "divider",
                        "values": {
                            "_meta": {
                                "htmlID": "u_content_divider_1",
                                "htmlClassNames": "u_content_divider"
                            },
                            "width": "77%",
                            "anchor": "",
                            "border": {
                                "borderTopColor": "#ffffff",
                                "borderTopStyle": "solid",
                                "borderTopWidth": "1px"
                            },
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "textAlign": "center",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "10px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "bbwq0JuBWs",
                        "type": "social",
                        "values": {
                            "_meta": {
                                "htmlID": "u_content_social_1",
                                "htmlClassNames": "u_content_social"
                            },
                            "align": "center",
                            "icons": {
                                "icons": [{
                                    "url": "https://facebook.com/",
                                    "name": "Facebook"
                                }, {
                                    "url": "https://twitter.com/",
                                    "name": "Twitter"
                                }, {
                                    "url": "https://linkedin.com/",
                                    "name": "LinkedIn"
                                }, {
                                    "url": "https://instagram.com/",
                                    "name": "Instagram"
                                }],
                                "editor": {
                                    "data": {
                                        "customIcons": [],
                                        "customOptions": [],
                                        "showDefaultIcons": true,
                                        "showDefaultOptions": true
                                    }
                                },
                                "iconType": "circle-white"
                            },
                            "anchor": "",
                            "spacing": 15,
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "20px 10px 10px",
                            "displayCondition": null
                        }
                    }, {
                        "id": "jCNn9dALYi",
                        "type": "text",
                        "values": {
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\">2261 Market Street #4667 San Francisco, CA 94114</p>\n<p style=\"font-size: 14px; line-height: 140%;\">All rights reserved.  Company No. 94114</p>\n<p style=\"font-size: 14px; line-height: 140%;\"> </p>\n<p style=\"font-size: 14px; line-height: 140%;\">Preferences | Unsubscribe  | View in browser</p>",
                            "_meta": {
                                "htmlID": "u_content_text_11",
                                "htmlClassNames": "u_content_text"
                            },
                            "color": "#ffffff",
                            "anchor": "",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverColor": "#0000ee",
                                "linkHoverUnderline": true
                            },
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "containerPadding": "10px 10px 40px",
                            "displayCondition": null
                        }
                    }]
                }]
            }],
            "values": {
                "_meta": {
                    "htmlID": "u_body",
                    "htmlClassNames": "u_body"
                },
                "linkStyle": {
                    "body": true,
                    "linkColor": "#0000ee",
                    "linkUnderline": true,
                    "linkHoverColor": "#0000ee",
                    "linkHoverUnderline": true
                },
                "textColor": "#000000",
                "fontFamily": {
                    "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                    "label": "Montserrat",
                    "value": "'Montserrat',sans-serif",
                    "defaultFont": true
                },
                "popupWidth": "600px",
                "popupHeight": "auto",
                "borderRadius": "10px",
                "contentAlign": "center",
                "contentWidth": "600px",
                "popupPosition": "center",
                "preheaderText": "",
                "backgroundColor": "#000000",
                "backgroundImage": {
                    "url": "",
                    "cover": false,
                    "center": true,
                    "repeat": false,
                    "fullWidth": true
                },
                "contentVerticalAlign": "center",
                "popupBackgroundColor": "#FFFFFF",
                "popupBackgroundImage": {
                    "url": "",
                    "cover": true,
                    "center": true,
                    "repeat": false,
                    "fullWidth": true
                },
                "popupCloseButton_action": {
                    "name": "close_popup",
                    "attrs": {
                        "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                    }
                },
                "popupCloseButton_margin": "0px",
                "popupCloseButton_position": "top-right",
                "popupCloseButton_iconColor": "#000000",
                "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
                "popupCloseButton_borderRadius": "0px",
                "popupCloseButton_backgroundColor": "#DDDDDD"
            }
        },
        "counters": {
            "u_row": 3,
            "u_column": 5,
            "u_content_menu": 1,
            "u_content_text": 12,
            "u_content_image": 4,
            "u_content_timer": 1,
            "u_content_button": 5,
            "u_content_social": 1,
            "u_content_divider": 3,
            "u_content_heading": 2
        },
        "schemaVersion": 9
    };
      emailEditorRef.current.editor.loadDesign(templateJson);
    }
    
    const onReady = () => {
      setisEditorReady(true)
      editorThemeChanger()
      // editor is ready
    };
    
    useEffect(() => {
      if(isEditorReady){
        console.log("this is working in if")
        editorThemeChanger()
      }
    }, [theme])
    
    const editorThemeChanger = () =>{
      if(theme==="fantasy"){
        emailEditorRef.current.editor.setAppearance({
          theme: 'light',
          panels: {
            tools: {
              dock: 'right'
            }
          }
        });
      }else if(theme==="dracula"){
        emailEditorRef.current.editor.setAppearance({
          theme: 'dark',
          panels: {
            tools: {
              dock: 'right'
            }
          }
        });
      }
    }

    const options = {
        customCSS: [
          `body{
            background-color: yellow;
          }`
        ],
      
      fonts: {
        showDefaultFonts: true,
        customFonts: [
          {
            label: "Comic Sans",
            value: "'Comic Sans MS', cursive, sans-serif"
          },
          {
            label: "Lobster Two",
            value: "'Lobster Two',cursive",
            url: "https://fonts.googleapis.com/css?family=Lobster+Two:400,700"
          },
          {
            label: "SamsungOne",
            value: "'SamsungOne', Arial, Helvetica, sans-serif",
            url: "https://cdn.samsung.com/etc/designs/smg/global/fonts/SamsungOne-400.woff2"
          },
          {
            label: "Samsung Sharp Sans",
            value: "'SamsungOne', Arial, Helvetica, sans-serif",
            url: 'https://cdn.samsung.com/etc/designs/smg/global/fonts/SamsungSharpSansBd.woff'
          }
        ]
      },
      features: {
        audit: true,
        stockImages: {
          enabled: true,
          safeSearch: true,
          defaultSearchTerm: "people"
        }
      },
      tools: {
        form: {
          enabled: true
        }
      }
    }
  

    return(
        <EmailEditorContext.Provider value={{
            emailEditorRef,
            onLoad,
            onReady,
            options,
            isEditorReady,
        }}> {children}</EmailEditorContext.Provider> 
    )
}


export default EmailEditorContext;