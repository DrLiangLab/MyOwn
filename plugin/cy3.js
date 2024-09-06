var ojbk = $response.body;
var obj =  JSON.parse(ojbk);

if($request.url.indexOf("/v2/user") != -1) {
  obj.result.is_vip = true;
  obj.result.vip_type = "s";
  obj.result.svip_expired_at = 4070951226;
}

ojbk = JSON.stringify(obj);
$done(ojbk);
