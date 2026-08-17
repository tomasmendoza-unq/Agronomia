package com.agro.feature.image.contracts;

import org.springframework.web.multipart.MultipartFile;

public interface SaveImageService {
    String saveImage(MultipartFile logo);
}
