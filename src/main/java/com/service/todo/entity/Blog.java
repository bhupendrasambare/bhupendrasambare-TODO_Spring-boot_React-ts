/**
 * author @bhupendrasambare
 * Date   :02/07/24
 * Time   :10:36 pm
 * Project:todo
 **/
package com.service.todo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "blogs")
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;
    private String author;

    @Column(name = "author_mail")
    private String authorMail;

    @Column(name = "author_website")
    private String authorWebsite;

    private String subtitle;

    @Column(name = "created_date")
    private LocalDateTime createdDate;

    @Lob
    private String data;

}
