<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HabitatController extends AbstractController
{
    /**
     * @Route("/habitats", name="habitats")
     */
    public function list(): Response
    {
        // Logic to get the list of habitats
        return $this->render('habitat/list.html.twig');
    }
}
