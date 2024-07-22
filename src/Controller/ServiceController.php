<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ServiceController extends AbstractController
{
    /**
     * @Route("/services", name="services")
     */
    public function list(): Response
    {
        // Logic to get the list of services
        return $this->render('service/list.html.twig');
    }
}
