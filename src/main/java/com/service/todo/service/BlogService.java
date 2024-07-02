/**
 * author @bhupendrasambare
 * Date   :02/07/24
 * Time   :10:43 pm
 * Project:todo
 **/
package com.service.todo.service;

import com.service.todo.entity.Blog;
import com.service.todo.repository.BlogRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@BrowserCallable
@AnonymousAllowed
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    public List<Blog> findAll(){
        return blogRepository.findAll();
    }

    public Blog findById(Integer id){
        return blogRepository.findById(id).orElse(null);
    }

    public Blog save(Blog blog){
        return blogRepository.save(blog);
    }
}
