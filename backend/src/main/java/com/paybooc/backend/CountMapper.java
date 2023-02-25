package com.paybooc.backend;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface CountMapper {
	
    int getCount();


    void updateCount(int count);
}
