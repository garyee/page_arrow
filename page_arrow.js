$.fn.dataTableExt.oPagination.page_arrows = {
            "fnInit": function ( oSettings, nPaging, fnCallbackDraw )
            {
                var counter = document.createElement('div');
                var currentSpan = document.createElement( 'span' );
                var dividerSpan = document.createElement( 'span' );
                var totalSpan = document.createElement( 'span' );

                var nPrevious = document.createElement( 'a' );
                var nNext = document.createElement( 'a' );

                nPrevious.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sPrevious ) );
                nNext.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sNext ) );

                currentSpan.appendChild( document.createTextNode( this.calcCurrentPage(oSettings)));
                totalSpan.appendChild( document.createTextNode( this.calcPages(oSettings)));

                var default_devider="/";
                if(oSettings.oLanguage.oPaginate.sDivider!=undefined && oSettings.oLanguage.oPaginate.sDivider!="")
                    default_devider= oSettings.oLanguage.oPaginate.sDivider;

                dividerSpan.appendChild( document.createTextNode( default_devider ));


                dividerSpan.className = "divider";
                currentSpan.className = "current_page";
                totalSpan.className   = "total_page";

                nPrevious.className = "paginate_arrow previous";
                nNext.className="paginate_arrow next";

                nPaging.appendChild( nPrevious );
                nPaging.appendChild( currentSpan );
                nPaging.appendChild( dividerSpan );
                nPaging.appendChild( totalSpan );
                nPaging.appendChild( nNext );

                $(nPrevious).click( function() {
                    if (!$(this).hasClass("disabled")) {
                        oSettings.oApi._fnPageChange(oSettings, "previous");
                        fnCallbackDraw(oSettings);
                    }
                } );

                $(nNext).click( function() {
                    if (!$(this).hasClass("disabled")) {
                        oSettings.oApi._fnPageChange(oSettings, "next");
                        fnCallbackDraw(oSettings);
                    }
                } );
            },

            "fnUpdate": function ( oSettings, fnCallbackDraw )
            {
                if ( !oSettings.aanFeatures.p )
                {
                    return;
                }

                /* Loop over each instance of the pager */
                var an = oSettings.aanFeatures.p;

                for ( var i=0, iLen=an.length ; i<iLen ; i++ )
                {
                    var buttons = an[i].getElementsByTagName('a');
                    if ( oSettings._iDisplayStart === 0 )
                    {
                        buttons[0].className = "paginate_arrow previous disabled";
                    }
                    else
                    {
                        buttons[0].className = "paginate_arrow previous";
                    }
                    if ( oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() )
                    {
                        buttons[1].className = "paginate_arrow next disabled";
                    }
                    else
                    {
                        buttons[1].className = "paginate_arrow next";
                    }
                    var spans = an[i].getElementsByTagName('span');
                    $(spans[0]).html(this.calcCurrentPage(oSettings));
                    $(spans[2]).html(this.calcPages(oSettings));



                }
            },
            "calcCurrentPage": function(oSettings) {
                return Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength) + 1;
            },
            "calcPages": function(oSettings) {
                return Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength);
            }
        };