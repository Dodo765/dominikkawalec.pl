<?php
// (A) FTP SETTINGS - CHANGE TO YOUR OWN!
$ftphost = "ftpupload.net";
$ftpuser = "b4_33616366";
$ftppass = "Password";
$source = "kalkulator"; // target file on ftp server
$destination = "kalkulator"; // save to this file
 
// (B) CONNECT TO FTP SERVER
$ftp = ftp_connect($ftphost) or exit("Failed to connect to $ftphost");
 
// (C) LOGIN & DOWNLOAD
if (ftp_login($ftp, $ftpuser, $ftppass)) {
  echo ftp_get($ftp, $destination, $source, FTP_BINARY)
    ? "Saved to $destination"
    : "Error downloading $source" ;
} else { echo "Invalid user/password"; }
 
// (D) CLOSE FTP CONNECTION
ftp_close($ftp);