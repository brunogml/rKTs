<?php

ERROR HERE

$id=3001;
$id1=6676;

	for ($x = $id; $x <= $id1; $x++) {

$S_ID=97;
$V_Number=$x;
$V_Name="NLM".$x;
$V_Ref="INLM".$x;
$V_Nbpages=0;
$V_Complete=1;
$V_Name=str_replace("'","\'",$V_Name);


try
{
$mysqlClient  = new PDO('mysql:host=mysqlsvr83.world4you.com;dbname=6140636db11;charset=utf8', 'sql4629280', 'aku@5mp7');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

$sql="INSERT INTO Volumes (	S_ID, 
							V_Ref, 
							V_Number, 
							V_Name,
							V_Nbpages,
							V_Complete)
VALUES (	'$S_ID', 
			'$V_Ref', 
			'$V_Number', 
			'$V_Name',
			'$V_Nbpages',
			'$V_Complete');";
$resultat = $mysqlClient->prepare($sql);
$resultat->execute();

echo $V_Name.'<br>';
	}