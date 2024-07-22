// src/Controller/NoteController.php
namespace App\Controller;

use App\Entity\Note;
use App\Form\NoteType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class NoteController extends AbstractController
{
    /**
     * @Route("/notes", name="note_index")
     */
    public function index(EntityManagerInterface $em): Response
    {
        $notes = $em->getRepository(Note::class)->findAll();
        return $this->render('note/index.html.twig', ['notes' => $notes]);
    }

    /**
     * @Route("/note/{id}", name="note_show")
     */
    public function show(Note $note): Response
    {
        return $this->render('note/show.html.twig', ['note' => $note]);
    }

    /**
     * @Route("/note/new", name="note_new")
     */
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        $note = new Note();
        $form = $this->createForm(NoteType::class, $note);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($note);
            $em->flush();
            return $this->redirectToRoute('note_index');
        }

        return $this->render('note/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/note/{id}/edit", name="note_edit")
     */
    public function edit(Request $request, Note $note, EntityManagerInterface $em): Response
    {
        $form = $this->createForm(NoteType::class, $note);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->flush();
            return $this->redirectToRoute('note_index');
        }

        return $this->render('note/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
