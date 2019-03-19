#!/usr/bin/env perl
$times = time();
($sec, $min, $hour, ) = localtime($times);
print << "END";
Content-Type: text/html

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN">
<html lang="ja">
<head>
<title>CGI Test</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
現在の時刻は、$hour時 $min分 $sec秒です\n;
</body>
</html>
END
