<?php
namespace App\Services;

class ValidatorService
{
  	protected function validateLength($pass)
    {
      	$response = true;
    	$length = strlen($pass);
    	if ($length < 8)
        {
        	$response = "Length of Password should be atleast eight characters"; 
        }
      	
      	return $response;
    }
  
	public function validatePassword($pass)
    {
      	return $this->validateLength($pass);
    }
}