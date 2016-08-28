<?php

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

require_once 'OAMail.php';

$a = OAMail::create ()->addTo ('comdan66@gmail.com', 'OA')
                 ->setSubject (date('YmdHis'))
                 ->setBody ("<article><p>Hi 管理員,</p><p style='padding-left: 20px'>剛剛有一個訪客在您的「聯絡我們」留言囉，以下他所留下的聯絡資料：</p><table style='margin-left: 20px;border-collapse: collapse;width: calc(100% - 20px * 2);'><tbody><tr><th style='width: 100px;text-align: right;padding: 5px 5px 10px 0;border-bottom: 1px solid rgba(200, 200, 200, 1);'>稱 呼：</th><td style='text-align: left;padding: 5px 0 10px 5px;border-bottom: 1px solid rgba(200, 200, 200, 1);'>OA Wu</td></tr><tr><th style='width: 100px;text-align: right;padding: 11px 5px 10px 0;border-bottom: 1px solid rgba(200, 200, 200, 1);'>E-Mail：</th><td style='text-align: left;padding: 11px 0 10px 5px;border-bottom: 1px solid rgba(200, 200, 200, 1);'>comdan66@gmail.com</td></tr><tr><th style='width: 100px;text-align: right;padding: 11px 5px 10px 0;border-bottom: 1px solid rgba(200, 200, 200, 1);'>內容：</th><td style='text-align: left;padding: 11px 0 10px 5px;border-bottom: 1px solid rgba(200, 200, 200, 1);'>dsdasf fds fwretgesef gfdvs</td></tr></tbody></table><br/><p style='padding-left: 20px'>如果需要詳細列表，可以置<a href='' style='color: rgba(96, 156, 255, 1);margin: 0 2px;'>管理後台</a>檢閱。</p></article>")
                 ->send ();
