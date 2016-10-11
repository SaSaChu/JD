<?php

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

error_reporting(E_ALL ^ E_STRICT);

require_once 'PHPMailer-5.2.13/class.phpmailer.php';
require_once 'PHPMailer-5.2.13/class.smtp.php';


class OAMail extends PHPMailer {

  public function __construct () {
    parent::__construct ();

    $config = include('config.php');

    if (isset ($config['host']) && isset ($config['port']) && isset ($config['user']) && isset ($config['passwd']) && isset ($config['from']) && isset ($config['from_name']) && $config['host'] && $config['port'] && $config['user'] && $config['passwd'] && $config['from'] && $config['from_name']) {
      $this->isSMTP ();
      $this->SMTPAuth = true;
      $this->Host = $config['host'];
      $this->Port = $config['port'];
      $this->Username = $config['user'];
      $this->Password = $config['passwd'];
      $this->From = $config['from'];
      $this->FromName = $config['from_name'];
    }

    $this->CharSet = $config['charset'];
    $this->Encoding = $config['encoding'];
    $this->isHTML (true);
    $this->WordWrap = 50;

    if (!empty($config['secure'])) {
      $this->SMTPSecure = $config['secure'];
    }
  }

  public function addTo ($address, $name = '') {
    $this->addAddress ($address, $name);
    return $this;
  }
  public function addCC ($address, $name = '') {
    parent::addCC ($address, $name);
    return $this;
  }
  public function addBCC ($address, $name = '') {
    parent::addBCC ($address, $name);
    return $this;
  }
  public function addFile ($path, $name = '') {
    $this->addAttachment ($path, $name);
    return $this;
  }
  public function setSubject ($subject) {
    $this->Subject = $subject;
    return $this;
  }
  
  public function setBody ($body) {
    $this->Body = $body;
    return $this;
  }

  public static function create () {
    return new self ();
  }
}