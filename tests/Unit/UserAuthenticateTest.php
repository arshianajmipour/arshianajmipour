<?php

namespace Tests\Unit;
use PHPUnit\Framework\TestCase;
use App\Services\ValidatorService;

class UserAuthenticateTest extends TestCase
{
	protected function setUp():void
    {
		$this->validator = new ValidatorService();
	}
    
  	/**
     * @dataProvider passwords
     **/
	public function test_validatePassword_IfLengthLessThan8_ReturnErrorMessage($pass)
	{
  		$response = $this->validator->validatePassword($pass);
      	$this->assertEquals("Length of Password should be atleast eight characters", $response);
	}
  
  	public function passwords() : array
    {
    	return [
          ['bvG7&'],
          ['Mqvg(2'],
          ['NWVrc'],
          ['Kqcrx3']
        ];
    }
}