<?php
// Copyright 1999-2019. Plesk International GmbH. All rights reserved.

class IndexController extends \pm_Controller_Action
{
    public function init()
    {
        parent::init();

        $this->view->baseUrl = \pm_Context::getBaseUrl();
        $this->view->version = \pm_Context::getModuleInfo()->version;
    }

    public function indexAction()
    {
    }
}
