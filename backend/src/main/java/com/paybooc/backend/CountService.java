package com.paybooc.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountService {
	
	@Autowired
	CountMapper countMapper;
	
	public int getCount() {
        return countMapper.getCount();
    }
    
    public void updateCount(int count) {
        countMapper.updateCount(count);
    }
}
