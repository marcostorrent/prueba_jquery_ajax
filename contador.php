<?php
/**
 * Evidentemente faltaría hacerlo bien con POO, seguridad, en JSON, etc
 */
function getCount($n)
{
    $file_path = $n.'.txt';
    $count=0;
    if (file_exists($file_path)) {
        $count = file_get_contents($file_path);
    }
    return $count;
}


function setCount($n)
{
    $file_path = $n.'.txt';
    $c=getCount($n);
    file_put_contents($file_path, $c+1);
    return $c+1;

}

if (!empty($_POST)){
    echo setCount($_POST['n']);
    
}