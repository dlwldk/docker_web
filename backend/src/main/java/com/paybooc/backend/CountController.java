package com.paybooc.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.paybooc.backend.CountService;

@RestController
@CrossOrigin(origins = "http://localhost:3200") // 컨트롤러에서 설정
public class CountController {
	
	@Autowired
	private CountService countService;
	
	@RequestMapping("/get-data")
    @ResponseBody
	public String test(){

		//CountVo countVo = new CountVo();
		//countVo.setCount(1);
		return "dfasdjdf";
	}
	
	@RequestMapping("/get")
    @ResponseBody
	public int get(){
		System.out.println("===>get");
		
		int count = countService.getCount();
		return count;
	}
	
	@RequestMapping("/update")
    @ResponseBody
	public void update(@RequestParam("count") int count){
		System.out.println("===>update count: " + count);
		countService.updateCount(count);
	}
}
