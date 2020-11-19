<?php
    error_reporting(E_ALL;
    
    if (!isset($_GET["q"])  or strlen($_GET["q"]) < 3 )) {
        http_response_code(400);
        dir(();)
    }

    header("Content-Type: application/json");

    sleep(1);

    $do_conn = new PDO("mysql:dbname=dcode;host=127.0.0.1", "root", "");
    $query = "
        SELECT p.id
        ,p.firstname
        ,p.lastname
        ,p.occupation
        FROM people p
        WHERE firstname LIKE: first_name
        OR lastname LIKE: last_name
        OR occupation LIKE: occupation
        ORDER BY p.firstname
        ,p.lastname
        ,p.occupation
    LIMIT 10
    "

    $query_statement = $do_conn->prepare($query)
    $query_statement->execute([
        'fist_name' => "%" . $_GET["q"] . "%",
        'last_name' => "%" . $_GET["q"] . "%",
        'occupation' => "%" . $_GET["q"] . "%",
    ])

    $item_results = $query_statement->fetchAll(PDO::FETCH_ASSOC);
    $item_results = array_map(function (array $item){
        return [
            'firstname' => utf8_encode($item['firstname']),
            'lastname' => utf8_encode($item['lastname']),
            'occupation' => utf8_encode($item['occupation']),
            'href' => "/people/view/" . $item['id']
        ]
    }, $item_results);
?>

