<!--All this has really no particular relation to the project at hand, I just wanted to tinker a bit with
PHP so that I could for once brush up my knowledge. (I have not been working with it for a couple of years, just
thought it would be cool to use it)-->

<?
$mysqli = new mysqli("db", "root", "example", "image_db");
$sql = 'SELECT * FROM images';
$result = $mysqli->query($sql);

if ($result->num_rows > 0)
{
    getImages($result);
} else {
    foreach (scandir('./assets') as $imagePath)
    {
        $path = explode('.', $imagePath);
        if($path[0]) {
            $mimeType = $path[1] === 'png' ? 'png' : 'svg';
            $sqlImg = "INSERT INTO images(path, name) VALUES('$path[0].$mimeType', '$path[0]')";
            $resultImg = $mysqli->query($sqlImg);
            $result = $mysqli->query($sql);
            getImages($result);
        }
    }
}


function getImages($queryResult) {
    global $imgObject;
    $imgObject = new stdClass();
    while ($data = $queryResult->fetch_object()) {
        $images[] = $data;
    }
    foreach ($images as $image) {
        $imgObject->{$image->name} = './assets/' . $image->path;
    }
}
?>