/*Problem 4. Number of elements

 Write a function to count the number of div elements on the web page*/

<!doctype html>
<html>
<head>
<meta charset="UTF-8">
    <title>Problem 4 Number of elements</title>
</head>
<body>
<div>Div 1</div>
<div>Div 2</div>
<div>Div 3</div>
<div>Div 4</div>
<div>Div 5</div>

<script>
function countDivElements(){
    var divs = document.getElementsByTagName('div').length;

    console.log(divs);
    return divs;
}
countDivElements();
</script>
</body>
</html>

