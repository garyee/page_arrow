# page_arrows
A Jquery.Datatables pagination plugin

Use by:
```html
<script type="text/javascript" src="jquery.dataTables.js"></script>
<script type="text/javascript" src="dataTables.page_arrows.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $('#example').dataTable( {
            "pagingType": "page_arrows"
        } );
    } );
</script>
```
Change the Divider (Thing between the current-pagenumber and the total page-number) by:
```javascript
$('#example').dataTable( {
  "pagingType": "page_arrows",
  language: {
    "oPaginate": {
      "sDivider": "||",
    }
  }
} );
```
To use Font Awesome flashes:
```javascript
$('#example').dataTable( {
  "pagingType": "page_arrows",
  language: {
    "oPaginate": {
      "sFirst": '\uf053',
            "sPrevious": '\uf053',
            "sNext": '\uf054',
            "sLast": '\uf054',
            "sDivider": "/",
    }
  }
} );
```
And in CSS:
```css
.dataTables_paginate a{
        font-family: FontAwesome;
}
```
Make Shure to have loaded Font-Awesome!
