<?php
try
{
$mysqlClient  = new PDO('mysql:host=mysqlsvr83.world4you.com;dbname=6140636db12;charset=utf8', 'sql4629280', 'aku@5mp7');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

$id=$_GET['id'];

for ($y = $id; $y < $id+1000; $y++) {
	
	$sqlQueryl = "SELECT * FROM locationsNLM WHERE id LIKE '$y'";
	$resultatl = $mysqlClient->prepare($sqlQueryl);
	$resultatl->execute();
	$resultats = $resultatl->fetchAll();
	
	$sec=$resultats[0]['ref'];
	$sec=intval(explode(".",$sec)[1]);
	
	echo $y.':'.$sec.'<br>';
if ($sec!=$resultats[0]['ref'])
{
$sqlQueryl = "UPDATE locationsNLM
					SET  sec = '$sec'
					WHERE id = '$y'";
$resultatl = $mysqlClient->prepare($sqlQueryl);
$resultatl->execute();
}	
	
}
	