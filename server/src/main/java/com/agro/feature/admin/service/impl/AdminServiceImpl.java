package com.agro.feature.admin.service.impl;

import com.agro.feature.admin.contracts.AdminDataService;
import com.agro.feature.admin.service.AdminService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class AdminServiceImpl implements AdminService, AdminDataService {
}
